import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { MaterialModule } from '../../material.module';
import { EditorEffects } from './state/editor.effects';
import { editorFeatureKey, editorReducer } from './state/editor.reducer';
import { EditorContainerComponent } from './components/editor-container/editor-container.component';
import { CommentsListComponent } from './components/comments-list/comments-list.component';
import { CommentEditComponent } from './components/comment-edit/comment-edit.component';

const comps = [
  EditorContainerComponent,
  CommentsListComponent,
  CommentEditComponent,
];

@NgModule({
  declarations: comps,
  exports: comps,
  imports: [
    CommonModule,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    StoreModule.forFeature(editorFeatureKey, editorReducer),
    EffectsModule.forFeature([EditorEffects]),
  ],
})
export class MarkdownEditorModule {}
