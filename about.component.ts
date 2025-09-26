import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  teamMembers = [
    { name: 'Alice Johnson', role: 'CEO & Founder', photo: 'assets/team/alice.jpg' },
    { name: 'Mark Smith', role: 'Head of Operations', photo: 'assets/team/mark.jpg' },
    { name: 'Sophie Williams', role: 'Lead Developer', photo: 'assets/team/sophie.jpg' },
    { name: 'David Lee', role: 'Marketing Manager', photo: 'assets/team/david.jpg' }
  ];
}
