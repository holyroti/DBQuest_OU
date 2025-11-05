//Player entity helper methods to register , login, get icon, passwordhash
export interface PlayerProps {
  playerId: number;
  username: string;
  passwordHash: string;
  displayName: string | null;
  icon: string | null;
}

export class Player {
  constructor(public props: PlayerProps) { }
  get id() { return this.props.playerId; }
  get username() { return this.props.username; }
  get displayName() { return this.props.displayName; }
  get icon() { return this.props.icon; }
  get passwordHash() { return this.props.passwordHash; }
}
