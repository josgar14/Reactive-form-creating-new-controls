import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ]
})
export class AppComponent {
	title = 'dynamic-form-controls';
	formModel = new FormGroup({
		emails: new FormArray([ new FormControl() ])
	});

	get emailsFormArray() {
		return this.formModel.get('emails') as FormArray;
	}
	get value() {
		return JSON.stringify(this.formModel.value, null, 4);
	}

	addEmail() {
		const emails = this.emailsFormArray;
		emails.push(new FormControl());
	}

	onSubmit() {
		console.log(this.formModel.value);
	}
}
