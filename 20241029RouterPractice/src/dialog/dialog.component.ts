import { Component,inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatDialogTitle, MatDialogContent, MatDialogActions ,
        MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog'

@Component({
  // 無法當成組件使用
  selector: 'app-dialog',
  standalone: true,
  imports: [
            FormsModule,
            MatDialogTitle,
            MatDialogContent,
            MatDialogActions ,
          ],
  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.scss'
})
export class DialogComponent {

  // 將整個 DialogComponent 注入 dialogRef 這個變數
  readonly dialogRef = inject(MatDialogRef<DialogComponent>);
  // 這個data為dialog時接收傳送回來的資料物件，設定any就可以接收資料
  readonly data = inject<any>(MAT_DIALOG_DATA);

  dialogInputData!:string;

  goBack(): void{
    // let returnData=['1','2']
    this.dialogRef.close(this.dialogInputData);
  }

}
