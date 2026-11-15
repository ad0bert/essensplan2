import { TestBed } from '@angular/core/testing';

import { UserService } from '../../../../service/UserService';
import { AccountComponent } from './account.component';

describe('AccountComponent', () => {
  it('logs out and closes the dialog', async () => {
    const logout = vi.fn();
    TestBed.configureTestingModule({
      providers: [{ provide: UserService, useValue: { logout, userName: () => 'peter' } }],
    });
    const fixture = TestBed.createComponent(AccountComponent);
    const closed = vi.fn();
    fixture.componentInstance.dialogClose.subscribe(closed);
    await fixture.whenStable();

    (fixture.nativeElement as HTMLElement).querySelector('button')?.click();

    expect(logout).toHaveBeenCalled();
    expect(closed).toHaveBeenCalled();
  });
});
