import { SupplierInfoModule } from './supplier-info.module';

describe('SupplierInfoModule', () => {
  let supplierInfoModule: SupplierInfoModule;

  beforeEach(() => {
    supplierInfoModule = new SupplierInfoModule();
  });

  it('should create an instance', () => {
    expect(supplierInfoModule).toBeTruthy();
  });
});
