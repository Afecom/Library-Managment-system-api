import { Controller, Patch, Delete, Param, Body, UseGuards, Get, Post } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBearerAuth } from '@nestjs/swagger';
import { StaffService } from './staff.service';
import { Staff } from '../entities/staff.entity';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../auth/guards/roles.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { UpdateStaffDto } from './dto/update-staff.dto';
import { SignupDto } from 'src/auth/dto/auth.dto';

@ApiTags('staff')
@Controller('staff')
@UseGuards(JwtAuthGuard, RolesGuard)
@ApiBearerAuth()
export class StaffController {
  constructor(private readonly staffService: StaffService) {}

  @Patch(':id')
  @Roles('admin')
  @ApiOperation({ summary: 'Update a staff member' })
  @ApiResponse({ status: 200, description: 'Staff updated successfully', type: Staff })
  @ApiResponse({ status: 404, description: 'Staff not found' })
  @ApiParam({ name: 'id', description: 'Staff ID' })
  update(@Param('id') id: string, @Body() updateStaffDto: UpdateStaffDto): Promise<Staff> {
    return this.staffService.update(+id, updateStaffDto);
  }

  @Delete(':id')
  @Roles('admin')
  @ApiOperation({ summary: 'Delete a staff member' })
  @ApiResponse({ status: 200, description: 'Staff deleted successfully' })
  @ApiResponse({ status: 404, description: 'Staff not found' })
  @ApiParam({ name: 'id', description: 'Staff ID' })
  remove(@Param('id') id: string): Promise<void> {
    return this.staffService.remove(+id);
  }
} 