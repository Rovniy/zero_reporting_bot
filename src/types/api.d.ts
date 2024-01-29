import { Response } from 'express'

export type ApiFunction = ({ req, res }: { req?: Request; res?: Response }) => void;
