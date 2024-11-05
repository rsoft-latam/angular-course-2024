import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { StudentService } from '../../services/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrl: './score.component.scss'
})
export class ScoreComponent implements OnInit {

  public students:any[] = []

  constructor(
    private router:Router,
    private _authService: AuthService,
    private _studentService: StudentService
  ){}

  ngOnInit(): void {
    this._studentService.getStudents().subscribe((students) => {
      console.log(students)
      this.students = students
    })
  }

  onLogout(){
    this._authService.logout()
    this.router.navigate(['../../'])
  }

}
