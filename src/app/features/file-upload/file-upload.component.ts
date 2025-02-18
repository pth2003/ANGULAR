import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxFileDropEntry, NgxFileDropModule } from 'ngx-file-drop';
import { FormsModule } from '@angular/forms';
import { TuiIcon, TuiLabel, TuiTextfield } from '@taiga-ui/core';
import { ChangeDetectorRef } from '@angular/core';
@Component({
  selector: 'app-file-upload',
  standalone: true,
  imports: [
    CommonModule,
    NgxFileDropModule,
    FormsModule,
    TuiTextfield,
    TuiLabel,
    TuiIcon,
  ],
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.scss'],
})
export class FileUploadComponent {
  fileName: string | null = null;
  invalidFile = false;
  constructor(private cdr: ChangeDetectorRef) {}
  // Xử lý khi file được kéo-thả vào
  onFilesDropped(files: NgxFileDropEntry[]) {
    this.invalidFile = false;
    this.fileName = null;
    for (const droppedFile of files) {
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => {
          // Kiểm tra định dạng file .xlsx
          const fileExtension = file.name.split('.').pop()?.toLowerCase();
          if (fileExtension === 'docx') {
            this.fileName = file.name;
          } else {
            this.invalidFile = true;
          }
          this.cdr.detectChanges();
        });
      }
    }
  }

  // Xử lý khi chọn file bằng nút "Chọn file"
  onFileSelected(event: any) {
    this.invalidFile = false;
    this.fileName = null;

    const file = event.target.files[0];
    if (file) {
      // Kiểm tra nếu có file được chọn
      if (file.name.split('.').pop()?.toLowerCase() === 'docx') {
        this.fileName = file.name;
      } else {
        this.invalidFile = true;
      }
      this.cdr.detectChanges(); // Đảm bảo UI cập nhật
    }
  }
}
