const definition:RegEx = 'A/d`\|{=]}';

export class DEF {
  constructor(args: string[]) {
    super(args);
  }
  
  public on(regex: RegEx) {
    return parse(regex);
  }
}

console.log(new DEF().on(definition));

// WEBHOOCKS

interface event {
  interact: function(),
  error: Error()
}

export class WebHoock {
  constructor(id: number, url:URL) {
    super(id, url);
  }
  
  public on(events: event = () => listener: (string[])): this;

  public get(str: string) {
    if(str !typeof string) return Error('STR is a string');
  }
}
