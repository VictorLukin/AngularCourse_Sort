export class Sort {
  public sort(values: number[]): number[] {
    let buf: number;
    let isWorking;
    do {
      isWorking = false;
      for (let i = 0; i < values.length - 1; i++) {
        if (values[i] > values[i + 1]) {
          buf = values[i];
          values[i] = values[i + 1];
          values[i + 1] = buf;
          isWorking = true;
        }
      }
    } while (isWorking);
    return values;
  }

  public parse(text: string): number[] {
    const texts: string[] = text.split(/[\s;]/g);
    const values: number[] = new Array<number>();
    let count = 0;
    for (let i = 0; i < texts.length; i++) {
      if (texts[i].length > 0) {
        values[count] = +texts[i];
        count++;
      }
    }
    return values;
  }

  public validate(values: number[]): string {
    let i = 0;
    while (i < values.length) {
      if (isNaN(values[i])) {
        return 'Warning! At least one inputted item is not a number but sort will be done.';
      }
      i++;
    }
    return '';
  }

}
