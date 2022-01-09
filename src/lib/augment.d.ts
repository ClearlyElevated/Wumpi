import { MikroORM } from '@mikro-orm/core';

declare module '@sapphire/pieces' {
  interface Container {
    db: MikroORM;
  }
}

declare module '@sapphire/framework' {
  interface CommandOptions {
    category: string;
    syntax?: string;
  }
}

declare module '@sapphire/framework' {
  interface Preconditions {
    OwnerOnly: never;
    SupportEnabled: never;
  }
}
