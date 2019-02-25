import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

@Component({
  selector: 'app-visitenkarte',
  templateUrl: './visitenkarte.component.html',
  styleUrls: ['./visitenkarte.component.scss']
})

export class VisitenkarteComponent implements OnInit {

  public gitUser$;
  public hide = true;
  public err404: { message: string };

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.max(12)
  ]);

  matcher = new ErrorStateMatcherComponent();

  constructor(private http: HttpClient) { }

  ngOnInit() {

  }
  searchGitUser(gitUser) {
    this.http.get(`https://api.github.com/users/${gitUser}`).subscribe(
      res => {
        this.gitUser$ = res;
      },
      err => {
        this.err404 = { message: 'User Not Found!' };
        this.emailFormControl.setErrors(this.err404);
      }
    );
  }

}

/** Error when invalid control is dirty, touched, or submitted. */
export class ErrorStateMatcherComponent implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}
