import { TableConfig, getCellByName } from './table';

const googleTestTable: TableConfig = {
  guid: '1Vg0xopijI-Z-nK8BaF0Ufohiea2GMV3lJIWJl8zjhzw',
  indexKey: 'google_test',
  sheets: [ 'Form Responses 1' ],
  skipRows: 3,
  skipColumns: 0,
  nameRow: 3,
  typeRow: -1,
  defaultValueRow: -1,
  maxColumn: 'AP',
  getFilePath: () => 'google_test/data.json',
  feParser: async (data: any[]) => {
    return data.map((row, id) => {
      return {
        id,
        name: getCellByName(row, 'hospital-name').value,
        state: getCellByName(row, 'hospital-state').value,
        city: getCellByName(row, 'hospital-city').value,
        addr: getCellByName(row, 'hospital-address').value,
        contact: getCellByName(row, 'delivery-contact').value,
        detail: getCellByName(row, 'delivery-details').value,
        method: getCellByName(row, 'method').value,
        'surgicalMask-amount': getCellByName(row, 'surgicalMask-amount').value,
      };
    });
  },
  validation: () => true,
};

export default googleTestTable;
