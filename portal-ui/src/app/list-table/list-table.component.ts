import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-list-table',
  templateUrl: './list-table.component.html',
  styleUrls: ['./list-table.component.scss']
})
export class ListTableComponent {

  @Input() dataSource: MatTableDataSource<any>;
  @Input() displayedColumns: String[];

  @Output() deleteClicked = new EventEmitter<number>();
  @Output() updateClicked = new EventEmitter<number>();

  get data() {
    return this.dataSource.data;
  }

  isDataAvailable(): boolean {
    return this.data.length > 0;
  }

  onUpdateClicked(id: number) {
    this.updateClicked.emit(id);
  }

  onDeleteClicked(id: number) {
    this.deleteClicked.emit(id);
  }
}
