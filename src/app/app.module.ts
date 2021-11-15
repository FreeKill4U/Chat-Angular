import { WindowService } from './Services/window.service';
import { TokenService } from './Services/token.service';
import { SignalrService } from './Services/signalr.service';
import { RouterLink, Routes, RouterModule } from '@angular/router';
import { UserService } from './Services/user.service';
import { ChatService } from './Services/chat.service';
import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginPanelComponent } from './Components/login-panel/login-panel.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './Helper/Interceptor/auth.interceptor';
import { RegisterPanelComponent } from './Components/register-panel/register-panel.component';
import { PageComponent } from './Components/Main/page/page.component';
import { ChatsListComponent } from './Components/Main/chats-list/chats-list.component';
import { MessageContainerComponent } from './Components/Main/Chat/message-container/message-container.component';
import { AddUserComponent } from './Components/Main/Chat/add-user/add-user.component';
import { LeaveChatComponent } from './Components/Main/Chat/leave-chat/leave-chat.component';
import { NewMessageContainerComponent } from './Components/Main/Chat/New Message/new-message-container/new-message-container.component';
import { MessageTextAreaComponent } from './Components/Main/Chat/New Message/message-text-area/message-text-area.component';
import { ChatContainerComponent } from './Components/Main/Chat/chat-container/chat-container.component';
import { HeaderComponent } from './Components/Main/header/header.component';
import { LoadingComponent } from './Components/loading/loading.component';
import { MessegeCuterPipe } from './Helper/Pipe/messege-cuter.pipe';
import { LogoutComponent } from './Components/Main/Account/logout/logout.component';
import { IconComponent } from './Helper/Template/icon/icon.component';
import { ChatOptionsComponent } from './Components/Main/Chat Options/chat-options/chat-options.component';
import { UsersComponent } from './Components/Main/Chat Options/users/users.component';
import { ClickOutsideModule } from 'ng-click-outside';
import { AccountComponent } from './Components/Main/Account/account/account.component';
import { SettingsComponent } from './Components/Main/Account/settings/settings.component';
import { SearchChatComponent } from './Components/Main/search-chat/search-chat.component';
import { NewChatComponent } from './Components/Main/Account/new-chat/new-chat.component';
import { WindowComponent } from './Components/Main/Windows/window/window.component';
import { NewChatWindowComponent } from './Components/Main/Windows/new-chat-window/new-chat-window.component';
import { ChooseIconComponent } from './Helper/Template/choose-icon/choose-icon.component';
import { AccountSettingsWindowComponent } from './Components/Main/Windows/account-settings-window/account-settings-window.component';
import { ColorsService } from './Services/colors.service';
import { ColorPickerComponent } from './Helper/Template/color-picker/color-picker.component';
import { ChatSettingsComponent } from './Components/Main/Chat Options/chat-settings/chat-settings.component';
import { ChooseIconSmallComponent } from './Helper/Template/choose-icon-small/choose-icon-small.component';


export const appRouters: Routes =
[
  {path: 'LoginPanel', component: LoginPanelComponent},
  {path: 'RegisterPanel', component: RegisterPanelComponent},
  {path: 'Loading', component: LoadingComponent},
  {path: '', component: PageComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    LoginPanelComponent,
    RegisterPanelComponent,
    PageComponent,
    ChatsListComponent,
    MessageContainerComponent,
    NewChatComponent,
    AddUserComponent,
    LeaveChatComponent,
    NewMessageContainerComponent,
    MessageTextAreaComponent,
    ChatContainerComponent,
    HeaderComponent,
    LoadingComponent,
    MessegeCuterPipe,
    LogoutComponent,
    IconComponent,
    ChatOptionsComponent,
    UsersComponent,
    AccountComponent,
    SettingsComponent,
    SearchChatComponent,
    WindowComponent,
    NewChatWindowComponent,
    ChooseIconComponent,
    AccountSettingsWindowComponent,
    ColorPickerComponent,
    ChatSettingsComponent,
    ChooseIconSmallComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRouters),
    FormsModule,
    ClickOutsideModule
  ],
  providers: [UserService, ChatService, SignalrService, TokenService, WindowService, ColorsService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }],
  bootstrap: [AppComponent]
})
export class AppModule { }
