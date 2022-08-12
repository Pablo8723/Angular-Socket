
import { Router, Request, Response, response } from "express";

export const router = Router();


router.get('/mensajes', (req:Request, res: Response) => {

    res.json({
        ok: true,
        msg:'Todo en orden'
    })
});

router.post('/mensajes', (req:Request, res: Response) => {

    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        msg:'Post listo',
        cuerpo,
        de
    })
});
router.post('/mensajes/:id', (req:Request, res: Response) => {

    const id = req.params.id;
    const cuerpo = req.body.cuerpo;
    const de = req.body.de;

    res.json({
        ok: true,
        msg:'Post listo',
        cuerpo,
        de,
        id
    })
});