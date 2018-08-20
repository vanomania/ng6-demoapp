import { ColorToolModule } from './color-tool.module';

describe('ColorToolModule', () => {
  let colorToolModule: ColorToolModule;

  beforeEach(() => {
    colorToolModule = new ColorToolModule();
  });

  it('should create an instance', () => {
    expect(colorToolModule).toBeTruthy();
  });
});
