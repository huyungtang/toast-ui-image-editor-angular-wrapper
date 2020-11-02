import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { ToastUiImageEditorComponent } from "projects/toast-ui-image-editor/src/public_api";
import { toBase64String } from "@angular/compiler/src/output/source_map";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements AfterViewInit {

  @ViewChild(ToastUiImageEditorComponent) private editor: ToastUiImageEditorComponent;

  title = "toast-ui-image-editor-demo";

  public imageOptions = {
    includeUI: {
      menuBarPosition: 'right',
      menu: ['shape'],
    },
  };


  ngAfterViewInit(): void {
    this.editor.editorInstance.addImageObject('https://www.autotronic.com.tw/images/p3-products/p01.png').then(r => {
      console.log(r);
    });
  }

}
