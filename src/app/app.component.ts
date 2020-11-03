import { AfterViewInit, Component, ViewChild } from "@angular/core";

import { ToastUiImageEditorComponent } from "projects/toast-ui-image-editor/src/public_api";

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
      initMenu: 'shape',
      loadImage: {
        path: '/assets/2222.jpg',
        name: 'p01'
      },
    },
  };

  public includeUI = true;

  ngAfterViewInit(): void {

  }

}
