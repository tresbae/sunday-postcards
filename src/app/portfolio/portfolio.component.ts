import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectDialogComponent } from './project-dialog/project-dialog.component';

export interface Tile {
  color: string;
}

export interface Post {
  type: string;
  draft: boolean;
  title: string;
  tile?: Tile;
  image?: string;
  description?: string;
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  portfolio: Post[];

  constructor(
    public dialog: MatDialog
  ){
    this.portfolio = [
      {
        type: 'Website',
        draft: false,
        title: 'Sunday Postcards',
        image: '../../assets/project-background.jpg',
        description: 'Design and create Sunday Postcards',
        tile: {
          color: 'lightblue',
        }
      },
      {
        type: 'Postcards',
        draft: false,
        title: 'Travel Collection',
        description: 'Curate and print collection of travel postcards',
        tile: {
          color: 'lightgray',
        }
      },
      {
        type: 'Test 3',
        draft: true,
        title: '',
        tile: {
          color: 'lightgray',
        }
      }
    ];
  }

  public openDialog(project: Post): void {
    const dialogRef = this.dialog.open(ProjectDialogComponent, {
      data: project,
      width: '500px',
      minHeight: '300px',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('Dialog closed');
    });
  }
}
