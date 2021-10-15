import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EMPLOYEES } from '../JSON-Employees';
  
@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  employees= EMPLOYEES;
  selectedemployee?: Employee;
  empty?: Employee;

  constructor() {
    
  }

  ngOnInit(): void {
    APIList();
    
  }
  onSelect(employee: Employee): void{
    
    if(employee==this.selectedemployee){
      this.selectedemployee = this.empty;
    }else{
      this.selectedemployee  = employee;
    }

  }

  

}
const apiUrl = 'http://dummy.restapiexample.com/api/v1/employees';
function APIList() { 
  
  // because fetchPosts returns a promise, use then() to get content and
  // catch() in case of any error, e.g. if posts is not iterable
  fetchPosts().then((posts) => {
    console.log(posts);
      if (!posts) {
          console.log('Could not get posts');
      }
      for (const post of posts.data) {
        if(post.profile_image==''){
          post.profile_image='https://cdn150.picsart.com/upscale-245339439045212.png?r1024x1024';
        }

        EMPLOYEES.push({ 
          id: post.id,
          employee_name: post.employee_name,
          employee_salary: post.employee_salary,
          employee_age: post.employee_age,
          profile_image: post.profile_image
        })
        
      }
    })
    .catch((e) => {
      console.log('listPosts:', e);
    });
  }
async function fetchPosts() {
  try {
      const response = await fetch(`${apiUrl}`);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
  
      return await response.json();
    } catch (e) {
      console.log('fetchPosts:', e);
  }
}