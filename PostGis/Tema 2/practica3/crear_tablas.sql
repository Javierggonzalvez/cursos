SELECT * FROM parcela WHERE superficie >
(
SELECT superficie
FROM parcela, variedad
WHERE variedad_id=variedad.id AND variedad='parellada' AND plantado_en =
(
SELECT min(plantado_en)
FROM parcela, variedad
WHERE variedad_id=variedad.id AND variedad='parellada'
)
);