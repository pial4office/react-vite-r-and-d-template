const log = console.log;

export class Console {
  static borderStyles = [
    'font-size: 14px',
    'font-weight: bold',
    'font-family: monospace',
    'background: white',
    'display: inline-block',
    'color: black',
    'padding: 8px 19px',
    'border: 1px dashed;',
  ].join(';');

  static printBorder(message: string) {
    let modifiedMessage = `%c ${message}`;
    log(modifiedMessage, this.borderStyles);
  }
}
