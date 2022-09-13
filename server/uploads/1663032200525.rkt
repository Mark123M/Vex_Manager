;; The first three lines of this file were inserted by DrRacket. They record metadata
;; about the language level of this file in a form that our tools can easily process.
#reader(lib "htdp-beginner-reader.ss" "lang")((modname A1b) (read-case-sensitive #t) (teachpacks ()) (htdp-settings #(#t constructor mixed-fraction #f #t none #f () #t)))
(define (collinear x1 y1 x2 y2 x3 y3)
  (or (= x1 x2 x3)
      (= (/ (- y2 y1) (- x2 x1)) (/ (- y3 y2) (- x3 x2)))
  )
)

(collinear 5 10 5 49 5 20)
