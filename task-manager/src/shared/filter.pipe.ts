import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'priorityFilter' })
export class FilterPipe implements PipeTransform {
  transform(tasks: any[], priority: string) {
    return priority ? tasks.filter(t => t.priority === priority) : tasks;
  }
}