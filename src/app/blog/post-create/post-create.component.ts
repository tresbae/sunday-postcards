import { Component, OnInit } from '@angular/core';
import * as ClassEditor from '@ckeditor/ckeditor5-build-classic';
import { Router } from '@angular/router';

export interface IPost {
    title: string;
    body: string;
}

@Component({
    selector: 'app-post-create',
    templateUrl: './post-create.component.html',
    styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent implements OnInit {
    public Editor = ClassEditor;
    public model = {
        placeholder: '<p>Hello, world!</p>',
    };
    post: IPost;

    constructor(
        private router: Router,
    ) {
        this.post = {
            title: '',
            body: '',
        };
    }

    ngOnInit(): any {}

    onSubmit(): any {
        console.log(this.post);
        this.router.navigate(['/blog'], {state: this.post});
    }
}
