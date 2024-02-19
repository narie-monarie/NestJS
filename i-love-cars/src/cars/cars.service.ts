import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { Car } from './entities/car.entity';

@Injectable()
export class CarsService {
  private car: Car[] = [
    {
      id: 1,
      name: 'Toyota',
      manufacturer: ['Subaru', 'Toyota'],
      category: 'HatchBack',
    },
  ];
  create(createCarDto: any) {
    this.car.push(createCarDto);
    return createCarDto;
  }

  findAll() {
    return this.car;
  }

  findOne(id: number) {
    const car = this.car.find((item) => item.id === id);
    if (!car) {
      throw new NotFoundException(`this car cannot be found`);
    }
    return car;
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return `This action updates a #${id} car`;
  }

  remove(id: number) {
    const deletecar = this.car.findIndex((item) => item.id === id);
    if (deletecar >= 0) {
      this.car.splice(deletecar, 1);
    }
  }
}
