/*!
 *
 * Copyright 2017 - acrazing
 *
 * @author acrazing joking.young@gmail.com
 * @since 2017-03-19 21:43:19
 * @version 1.0.0
 * @desc Pusher.ts
 */

import { Duplex } from './Duplex'


export class Pusher {
  constructor(private duplex: Duplex) {}

  private static pusher: Pusher

  static set(duplex: Duplex) { Pusher.pusher = new Pusher(duplex) }

  static get() { return Pusher.pusher.duplex }
}
