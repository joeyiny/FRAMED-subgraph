// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  TypedMap,
  Entity,
  Value,
  ValueKind,
  store,
  Bytes,
  BigInt,
  BigDecimal
} from "@graphprotocol/graph-ts";

export class Player extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Player entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Player must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Player", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Player | null {
    return changetype<Player | null>(store.get_in_block("Player", id));
  }

  static load(id: string): Player | null {
    return changetype<Player | null>(store.get("Player", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get game(): PlayerGameLoader {
    return new PlayerGameLoader("Player", this.get("id")!.toString(), "game");
  }
}

export class Game extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save Game entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type Game must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("Game", id.toString(), this);
    }
  }

  static loadInBlock(id: string): Game | null {
    return changetype<Game | null>(store.get_in_block("Game", id));
  }

  static load(id: string): Game | null {
    return changetype<Game | null>(store.get("Game", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get roomId(): i32 {
    let value = this.get("roomId");
    if (!value || value.kind == ValueKind.NULL) {
      return 0;
    } else {
      return value.toI32();
    }
  }

  set roomId(value: i32) {
    this.set("roomId", Value.fromI32(value));
  }

  get state(): string {
    let value = this.get("state");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set state(value: string) {
    this.set("state", Value.fromString(value));
  }

  get creator(): string {
    let value = this.get("creator");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set creator(value: string) {
    this.set("creator", Value.fromString(value));
  }

  get Players(): PlayerGameLoader {
    return new PlayerGameLoader("Game", this.get("id")!.toString(), "Players");
  }
}

export class PlayerGame extends Entity {
  constructor(id: string) {
    super();
    this.set("id", Value.fromString(id));
  }

  save(): void {
    let id = this.get("id");
    assert(id != null, "Cannot save PlayerGame entity without an ID");
    if (id) {
      assert(
        id.kind == ValueKind.STRING,
        `Entities of type PlayerGame must have an ID of type String but the id '${id.displayData()}' is of type ${id.displayKind()}`
      );
      store.set("PlayerGame", id.toString(), this);
    }
  }

  static loadInBlock(id: string): PlayerGame | null {
    return changetype<PlayerGame | null>(store.get_in_block("PlayerGame", id));
  }

  static load(id: string): PlayerGame | null {
    return changetype<PlayerGame | null>(store.get("PlayerGame", id));
  }

  get id(): string {
    let value = this.get("id");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set id(value: string) {
    this.set("id", Value.fromString(value));
  }

  get player(): string {
    let value = this.get("player");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set player(value: string) {
    this.set("player", Value.fromString(value));
  }

  get game(): string {
    let value = this.get("game");
    if (!value || value.kind == ValueKind.NULL) {
      throw new Error("Cannot return null for a required field.");
    } else {
      return value.toString();
    }
  }

  set game(value: string) {
    this.set("game", Value.fromString(value));
  }
}

export class PlayerGameLoader extends Entity {
  _entity: string;
  _field: string;
  _id: string;

  constructor(entity: string, id: string, field: string) {
    super();
    this._entity = entity;
    this._id = id;
    this._field = field;
  }

  load(): PlayerGame[] {
    let value = store.loadRelated(this._entity, this._id, this._field);
    return changetype<PlayerGame[]>(value);
  }
}
