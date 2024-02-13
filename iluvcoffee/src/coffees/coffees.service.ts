import { Injectable, NotFoundException } from '@nestjs/common';
import { Coffee } from './entities/coffee.entity';

@Injectable()
export class CoffeesService {
  private coffees: Coffee[] = [
    {
      id: 1,
      name: 'Toaster',
      brand: 'Brew Toast',
      flavors: ['chocolate', 'vanilla'],
    },
  ];

  findAll() {
    return this.coffees;
  }

  findOne(id: string) {
    const coffee = this.coffees.find((item) => item.id === +id);
    if (!coffee) {
      throw new NotFoundException(`Coffee ${id} not found`);
    }
    return coffee;
  }

  create(createCofeeDto: any) {
    this.coffees.push(createCofeeDto);
  }
  update(id: string, updateCoffeeDto: any) {
    const existingCofee = this.findOne(id);
    if (existingCofee) {
    }
  }

  remove(id: string) {
    const cofeeIndex = this.coffees.findIndex((item) => item.id === +id);
    if (cofeeIndex >= 0) {
      this.coffees.splice(cofeeIndex, 1);
    }
  }
}
