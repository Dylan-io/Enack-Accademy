/* ============================================
   ENACK ACADEMY — Course Data (OpenStax-based)
   ============================================ */

const CourseData = (() => {
  'use strict';

  const domains = {
    mecanique: {
      id: 'mecanique',
      title: 'Mécanique',
      icon: '⚙️',
      color: '#3b82f6',
      description: 'Cinématique, dynamique, énergie, quantité de mouvement et mécanique des fluides.',
      chapters: [
        {
          id: 'mec-cinematique',
          title: 'Cinématique du point',
          description: 'Position, vitesse, accélération et mouvements rectilignes et curvilignes.',
          tags: ['Position', 'Vitesse', 'Accélération'],
          lesson: {
            sections: [
              {
                title: 'Position et déplacement',
                content: `<p class="lesson-text">La <strong>position</strong> d'un objet est définie par ses coordonnées dans un référentiel donné. En une dimension, on utilise un axe x avec une origine O.</p>
<p class="lesson-text">Le <strong>déplacement</strong> (Δx) correspond au changement de position, et non à la distance parcourue. C'est une grandeur vectorielle qui ne dépend que du point de départ et du point d'arrivée.</p>
<div class="formula-box">
  <div class="formula-box__label">Formule — Déplacement</div>
  <div class="formula-box__formula">Δx = x₂ − x₁</div>
  <div class="formula-box__desc">Le déplacement est la différence entre la position finale et la position initiale.</div>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">Un coureur part du point x₁ = 2 m et arrive au point x₂ = 8 m. Son déplacement est <strong>Δx = 8 − 2 = 6 m</strong>. S'il revient ensuite à x = 2 m, son déplacement total est <strong>0 m</strong> (bien qu'il ait parcouru 12 m au total).</div>
</div>`
              },
              {
                title: 'Vitesse moyenne et instantanée',
                content: `<p class="lesson-text">La <strong>vitesse moyenne</strong> est le rapport du déplacement sur l'intervalle de temps. La <strong>vitesse instantanée</strong> est la limite de la vitesse moyenne quand l'intervalle de temps tend vers zéro — c'est la dérivée de la position par rapport au temps.</p>
<div class="formula-box">
  <div class="formula-box__label">Formule — Vitesse moyenne</div>
  <div class="formula-box__formula">v̄ = Δx / Δt = (x₂ − x₁) / (t₂ − t₁)</div>
</div>
<div class="formula-box">
  <div class="formula-box__label">Formule — Vitesse instantanée</div>
  <div class="formula-box__formula">v(t) = dx/dt = lim(Δt→0) Δx/Δt</div>
  <div class="formula-box__desc">La vitesse instantanée est la pente de la tangente à la courbe x(t) à l'instant t.</div>
</div>
<div class="concept-box">
  <div class="concept-box__label">🔑 Concept clé</div>
  <div class="concept-box__text">La <strong>vitesse</strong> est vectorielle (elle a un signe indiquant la direction), tandis que la <strong>rapidité</strong> (speed) est la valeur absolue de la vitesse, toujours positive.</div>
</div>`
              },
              {
                title: 'Accélération',
                content: `<p class="lesson-text">L'<strong>accélération</strong> mesure la variation de la vitesse au cours du temps. Lorsque l'accélération est constante, on obtient les équations du mouvement uniformément accéléré (MRUA).</p>
<div class="formula-box">
  <div class="formula-box__label">Formule — Accélération moyenne</div>
  <div class="formula-box__formula">ā = Δv / Δt = (v₂ − v₁) / (t₂ − t₁)</div>
</div>
<div class="formula-box">
  <div class="formula-box__label">Équations du MRUA</div>
  <div class="formula-box__formula">v = v₀ + at</div>
  <div class="formula-box__formula">x = x₀ + v₀t + ½at²</div>
  <div class="formula-box__formula">v² = v₀² + 2a(x − x₀)</div>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">Une voiture accélère de 0 à 100 km/h (27,8 m/s) en 8 secondes. Son accélération est <strong>a = 27,8 / 8 ≈ 3,47 m/s²</strong>. La distance parcourue pendant cette phase est <strong>x = ½ × 3,47 × 8² ≈ 111 m</strong>.</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "Un objet se déplace de x₁ = 3 m à x₂ = -2 m. Quel est son déplacement ?",
              options: ["5 m", "-5 m", "1 m", "-1 m"],
              correct: 1,
              explanation: "Le déplacement Δx = x₂ − x₁ = −2 − 3 = <strong>−5 m</strong>. Le signe négatif indique un déplacement vers la gauche (sens des x décroissants)."
            },
            {
              question: "Quelle est la vitesse moyenne d'un cycliste qui parcourt 30 km en 1h30 ?",
              options: ["30 km/h", "15 km/h", "20 km/h", "45 km/h"],
              correct: 2,
              explanation: "v̄ = Δx / Δt = 30 km / 1,5 h = <strong>20 km/h</strong>. On convertit 1h30 en 1,5 heure."
            },
            {
              question: "Une balle tombe en chute libre (g = 9,8 m/s²). Quelle est sa vitesse après 3 secondes ?",
              options: ["9,8 m/s", "19,6 m/s", "29,4 m/s", "44,1 m/s"],
              correct: 2,
              explanation: "v = v₀ + gt = 0 + 9,8 × 3 = <strong>29,4 m/s</strong>. La vitesse initiale est nulle car la balle est lâchée sans vitesse initiale."
            },
            {
              question: "La position d'un mobile est donnée par x(t) = 4t² − 2t + 1. Quelle est l'accélération ?",
              options: ["4 m/s²", "8 m/s²", "−2 m/s²", "2 m/s²"],
              correct: 1,
              explanation: "v(t) = dx/dt = 8t − 2, puis a(t) = dv/dt = <strong>8 m/s²</strong>. L'accélération est constante ici."
            },
            {
              question: "Si un objet a une vitesse positive mais une accélération négative, que se passe-t-il ?",
              options: ["Il accélère", "Il ralentit", "Il s'arrête immédiatement", "Sa vitesse change de signe instantanément"],
              correct: 1,
              explanation: "L'objet <strong>ralentit</strong>. Quand la vitesse et l'accélération sont de signes opposés, la valeur absolue de la vitesse diminue."
            }
          ]
        },
        {
          id: 'mec-lois-newton',
          title: 'Lois de Newton',
          description: 'Première, deuxième et troisième lois de Newton, forces, diagrammes de corps libre.',
          tags: ['Forces', 'F=ma', 'Inertie'],
          lesson: {
            sections: [
              {
                title: 'Première loi de Newton (Inertie)',
                content: `<p class="lesson-text">La <strong>première loi de Newton</strong> (ou principe d'inertie) stipule qu'un objet au repos reste au repos, et un objet en mouvement rectiligne uniforme continue son mouvement, tant qu'aucune force nette extérieure ne s'exerce sur lui.</p>
<div class="concept-box">
  <div class="concept-box__label">🔑 Concept clé</div>
  <div class="concept-box__text">L'inertie est la résistance d'un objet à tout changement de son état de mouvement. La masse d'un objet est une mesure quantitative de son inertie.</div>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">Lorsque vous êtes dans un bus qui freine brusquement, votre corps continue d'avancer par inertie. C'est pourquoi la ceinture de sécurité vous retient dans une voiture : elle fournit la force nécessaire pour modifier votre état de mouvement.</div>
</div>`
              },
              {
                title: 'Deuxième loi de Newton (F = ma)',
                content: `<p class="lesson-text">La <strong>deuxième loi de Newton</strong> est la relation fondamentale de la dynamique. Elle établit que la force résultante (ΣF) appliquée à un objet est proportionnelle à son accélération, la constante de proportionnalité étant la masse.</p>
<div class="formula-box">
  <div class="formula-box__label">Formule — Deuxième loi de Newton</div>
  <div class="formula-box__formula">ΣF⃗ = m × a⃗</div>
  <dl class="formula-box__where">
    <dt>ΣF⃗</dt><dd>= somme des forces (en Newtons, N)</dd>
    <dt>m</dt><dd>= masse (en kg)</dd>
    <dt>a⃗</dt><dd>= accélération (en m/s²)</dd>
  </dl>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">Un chariot de supermarché de 20 kg est poussé avec une force de 40 N (en négligeant le frottement). Son accélération est : <strong>a = F/m = 40/20 = 2 m/s²</strong>.</div>
</div>`
              },
              {
                title: 'Troisième loi de Newton (Action-Réaction)',
                content: `<p class="lesson-text">La <strong>troisième loi de Newton</strong> stipule que pour toute action, il existe une réaction égale et opposée. Quand un objet A exerce une force sur un objet B, l'objet B exerce simultanément une force de même intensité mais de sens opposé sur A.</p>
<div class="formula-box">
  <div class="formula-box__label">Formule — Action-Réaction</div>
  <div class="formula-box__formula">F⃗(A→B) = −F⃗(B→A)</div>
  <div class="formula-box__desc">Les deux forces s'exercent sur des objets différents et ont la même droite d'action.</div>
</div>
<div class="concept-box">
  <div class="concept-box__label">🔑 Concept clé</div>
  <div class="concept-box__text">Les forces d'action-réaction ne s'annulent <strong>jamais</strong> car elles s'exercent sur deux objets différents. Attention à l'erreur courante de croire qu'elles s'appliquent au même objet !</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "La première loi de Newton s'applique quand :",
              options: ["La force résultante est maximale", "La force résultante est nulle", "L'objet accélère", "L'objet change de direction"],
              correct: 1,
              explanation: "La première loi de Newton s'applique quand <strong>ΣF = 0</strong> : l'objet reste au repos ou en mouvement rectiligne uniforme."
            },
            {
              question: "Une force de 120 N accélère un objet à 3 m/s². Quelle est la masse de l'objet ?",
              options: ["360 kg", "40 kg", "117 kg", "123 kg"],
              correct: 1,
              explanation: "D'après F = ma, on obtient m = F/a = 120/3 = <strong>40 kg</strong>."
            },
            {
              question: "Vous poussez un mur avec une force de 50 N. Quelle force le mur exerce-t-il sur vous ?",
              options: ["0 N", "25 N", "50 N dans le même sens", "50 N en sens opposé"],
              correct: 3,
              explanation: "Troisième loi de Newton : le mur exerce sur vous une force de <strong>50 N en sens opposé</strong> à votre poussée."
            },
            {
              question: "Un astronaute flotte dans l'ISS sans bouger. Que peut-on dire ?",
              options: ["Aucune force ne s'exerce sur lui", "La force résultante est nulle", "Il n'y a pas de gravité", "Sa masse est nulle"],
              correct: 1,
              explanation: "La <strong>force résultante est nulle</strong> (la gravité est compensée par la force centripète de l'orbite). La gravité existe encore dans l'ISS !"
            }
          ]
        },
        {
          id: 'mec-energie',
          title: 'Énergie et Travail',
          description: 'Travail d\'une force, énergie cinétique, potentielle et conservation de l\'énergie.',
          tags: ['Travail', 'Énergie', 'Conservation'],
          lesson: {
            sections: [
              {
                title: 'Travail d\'une force',
                content: `<p class="lesson-text">Le <strong>travail</strong> (W) effectué par une force constante est défini comme le produit scalaire de la force et du déplacement. Il mesure le transfert d'énergie par une force lors d'un déplacement.</p>
<div class="formula-box">
  <div class="formula-box__label">Formule — Travail</div>
  <div class="formula-box__formula">W = F⃗ · d⃗ = F × d × cos(θ)</div>
  <dl class="formula-box__where">
    <dt>W</dt><dd>= travail (en Joules, J)</dd>
    <dt>F</dt><dd>= intensité de la force (en N)</dd>
    <dt>d</dt><dd>= déplacement (en m)</dd>
    <dt>θ</dt><dd>= angle entre F⃗ et d⃗</dd>
  </dl>
</div>
<div class="concept-box">
  <div class="concept-box__label">🔑 Concept clé</div>
  <div class="concept-box__text">Le travail est <strong>positif</strong> si la force et le déplacement sont dans le même sens (θ &lt; 90°), <strong>négatif</strong> si opposés (θ &gt; 90°), et <strong>nul</strong> si perpendiculaires (θ = 90°).</div>
</div>`
              },
              {
                title: 'Énergie cinétique et théorème de l\'énergie cinétique',
                content: `<p class="lesson-text">L'<strong>énergie cinétique</strong> est l'énergie associée au mouvement d'un objet. Le <strong>théorème de l'énergie cinétique</strong> (TEC) relie le travail total au changement d'énergie cinétique.</p>
<div class="formula-box">
  <div class="formula-box__label">Formule — Énergie cinétique</div>
  <div class="formula-box__formula">Ec = ½mv²</div>
</div>
<div class="formula-box">
  <div class="formula-box__label">Théorème de l'énergie cinétique</div>
  <div class="formula-box__formula">W_total = ΔEc = ½mv₂² − ½mv₁²</div>
  <div class="formula-box__desc">Le travail net de toutes les forces est égal au changement d'énergie cinétique.</div>
</div>`
              },
              {
                title: 'Conservation de l\'énergie mécanique',
                content: `<p class="lesson-text">En l'absence de forces non conservatives (comme le frottement), l'<strong>énergie mécanique</strong> (somme de l'énergie cinétique et potentielle) se conserve.</p>
<div class="formula-box">
  <div class="formula-box__label">Conservation de l'énergie mécanique</div>
  <div class="formula-box__formula">Ec₁ + Ep₁ = Ec₂ + Ep₂</div>
  <div class="formula-box__formula">½mv₁² + mgh₁ = ½mv₂² + mgh₂</div>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">Une balle de 0,5 kg est lâchée d'une hauteur de 10 m. En bas : Ep = 0, donc Ec = mgh = 0,5 × 9,8 × 10 = 49 J. On en déduit v = √(2 × 49 / 0,5) ≈ <strong>14 m/s</strong>.</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "Quel est le travail d'une force de 100 N qui déplace un objet de 5 m dans la direction de la force ?",
              options: ["20 J", "105 J", "500 J", "50 J"],
              correct: 2,
              explanation: "W = F × d × cos(0°) = 100 × 5 × 1 = <strong>500 J</strong>. L'angle est 0° car la force et le déplacement sont dans le même sens."
            },
            {
              question: "Un objet de 4 kg se déplace à 6 m/s. Quelle est son énergie cinétique ?",
              options: ["12 J", "24 J", "72 J", "144 J"],
              correct: 2,
              explanation: "Ec = ½mv² = ½ × 4 × 6² = ½ × 4 × 36 = <strong>72 J</strong>."
            },
            {
              question: "Une force perpendiculaire au déplacement effectue un travail :",
              options: ["Positif", "Négatif", "Nul", "Maximal"],
              correct: 2,
              explanation: "W = F × d × cos(90°) = 0. Une force perpendiculaire au déplacement ne fournit <strong>aucun travail</strong> (comme la force centripète)."
            },
            {
              question: "Un pendule oscille sans frottement. À quel point sa vitesse est-elle maximale ?",
              options: ["Au point le plus haut", "Au point le plus bas", "À mi-chemin", "Au point de retour"],
              correct: 1,
              explanation: "Au <strong>point le plus bas</strong>, toute l'énergie potentielle est convertie en énergie cinétique, donc la vitesse est maximale."
            }
          ]
        },
        {
          id: 'mec-quantite-mouvement',
          title: 'Quantité de mouvement',
          description: 'Impulsion, conservation de la quantité de mouvement, collisions élastiques et inélastiques.',
          tags: ['Impulsion', 'Collisions', 'Conservation'],
          lesson: {
            sections: [
              {
                title: 'Définition et impulsion',
                content: `<p class="lesson-text">La <strong>quantité de mouvement</strong> (ou momentum) est le produit de la masse par la vitesse. L'<strong>impulsion</strong> est le changement de quantité de mouvement produit par une force appliquée pendant un certain temps.</p>
<div class="formula-box">
  <div class="formula-box__label">Formule — Quantité de mouvement</div>
  <div class="formula-box__formula">p⃗ = m × v⃗</div>
</div>
<div class="formula-box">
  <div class="formula-box__label">Formule — Impulsion</div>
  <div class="formula-box__formula">J⃗ = F⃗ × Δt = Δp⃗</div>
  <div class="formula-box__desc">L'impulsion relie la force appliquée et la durée à la variation de quantité de mouvement.</div>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">Un airbag augmente le temps d'impact (Δt plus grand), ce qui <strong>réduit la force</strong> subie par le passager pour le même changement de quantité de mouvement.</div>
</div>`
              },
              {
                title: 'Collisions',
                content: `<p class="lesson-text">Dans une <strong>collision élastique</strong>, l'énergie cinétique totale est conservée. Dans une <strong>collision inélastique</strong>, seule la quantité de mouvement est conservée. Dans les deux cas, la quantité de mouvement totale est conservée si le système est isolé.</p>
<div class="formula-box">
  <div class="formula-box__label">Conservation de la quantité de mouvement</div>
  <div class="formula-box__formula">m₁v₁ᵢ + m₂v₂ᵢ = m₁v₁f + m₂v₂f</div>
</div>
<div class="concept-box">
  <div class="concept-box__label">🔑 Concept clé</div>
  <div class="concept-box__text"><strong>Collision parfaitement inélastique</strong> : les deux objets restent collés après l'impact (v₁f = v₂f). C'est le cas où le maximum d'énergie cinétique est perdu.</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "Un camion de 5000 kg roule à 10 m/s. Quelle est sa quantité de mouvement ?",
              options: ["500 kg·m/s", "5000 kg·m/s", "50 000 kg·m/s", "500 000 kg·m/s"],
              correct: 2,
              explanation: "p = mv = 5000 × 10 = <strong>50 000 kg·m/s</strong>."
            },
            {
              question: "Deux boules de billard de même masse entrent en collision élastique frontale. La première s'arrête. Que fait la seconde ?",
              options: ["Elle s'arrête aussi", "Elle repart à la même vitesse que la première", "Elle repart à la moitié de la vitesse", "Elle repart en sens inverse"],
              correct: 1,
              explanation: "Conservation de la quantité de mouvement + conservation de l'énergie cinétique : la seconde boule <strong>repart à la même vitesse</strong> que la première avait initialement."
            },
            {
              question: "Un airbag protège parce qu'il :",
              options: ["Réduit la quantité de mouvement", "Augmente le temps d'impact", "Augmente la force d'impact", "Élimine la force"],
              correct: 1,
              explanation: "L'airbag <strong>augmente le temps d'impact</strong> (Δt), ce qui réduit la force F = Δp/Δt pour le même changement de quantité de mouvement."
            }
          ]
        },
        {
          id: 'mec-rotation',
          title: 'Mouvement de rotation',
          description: 'Cinématique et dynamique de rotation, moment de force, moment d\'inertie.',
          tags: ['Rotation', 'Couple', 'Moment d\'inertie'],
          lesson: {
            sections: [
              {
                title: 'Grandeurs angulaires',
                content: `<p class="lesson-text">Le mouvement de rotation est décrit par des grandeurs angulaires analogues aux grandeurs linéaires : position angulaire (θ), vitesse angulaire (ω) et accélération angulaire (α).</p>
<div class="formula-box">
  <div class="formula-box__label">Correspondances linéaire ↔ angulaire</div>
  <div class="formula-box__formula">x ↔ θ , v ↔ ω , a ↔ α</div>
  <div class="formula-box__formula">v = rω , a_tangentielle = rα</div>
</div>`
              },
              {
                title: 'Moment de force (torque) et dynamique de rotation',
                content: `<p class="lesson-text">Le <strong>moment de force</strong> (τ) joue en rotation le même rôle que la force en translation. L'analogue de la deuxième loi de Newton pour la rotation est τ = Iα.</p>
<div class="formula-box">
  <div class="formula-box__label">Formule — Moment de force</div>
  <div class="formula-box__formula">τ = r × F × sin(θ)</div>
</div>
<div class="formula-box">
  <div class="formula-box__label">Deuxième loi de Newton (rotation)</div>
  <div class="formula-box__formula">Στ = I × α</div>
  <dl class="formula-box__where">
    <dt>I</dt><dd>= moment d'inertie (en kg·m²)</dd>
    <dt>α</dt><dd>= accélération angulaire (en rad/s²)</dd>
  </dl>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "Quelle est la relation entre vitesse linéaire v et vitesse angulaire ω ?",
              options: ["v = ω/r", "v = rω", "v = r²ω", "v = ω²r"],
              correct: 1,
              explanation: "La relation est <strong>v = rω</strong>, où r est le rayon du cercle."
            },
            {
              question: "Si vous poussez une porte près de ses charnières, par rapport à la poussée au bord opposé :",
              options: ["Même effort nécessaire", "Plus d'effort car le moment est plus petit", "Moins d'effort", "Le moment est identique"],
              correct: 1,
              explanation: "Le moment τ = rF. Près des charnières, r est petit, donc il faut une <strong>force plus grande</strong> pour obtenir le même couple."
            },
            {
              question: "Le moment d'inertie dépend de :",
              options: ["La masse seulement", "La vitesse seulement", "La masse et sa distribution par rapport à l'axe", "La force appliquée"],
              correct: 2,
              explanation: "Le moment d'inertie dépend de la <strong>masse et de sa distribution</strong> par rapport à l'axe de rotation (I = Σmᵢrᵢ²)."
            }
          ]
        }
      ]
    },

    thermo: {
      id: 'thermo',
      title: 'Thermodynamique',
      icon: '🔥',
      color: '#f59e0b',
      description: 'Température, chaleur, gaz parfaits, principes de la thermodynamique et entropie.',
      chapters: [
        {
          id: 'thermo-temperature',
          title: 'Température et chaleur',
          description: 'Échelles de température, dilatation thermique, transferts de chaleur.',
          tags: ['Température', 'Chaleur', 'Dilatation'],
          lesson: {
            sections: [
              {
                title: 'Température et équilibre thermique',
                content: `<p class="lesson-text">La <strong>température</strong> est une mesure de l'énergie cinétique moyenne des particules d'un système. Le <strong>principe zéro de la thermodynamique</strong> stipule que deux systèmes en équilibre thermique avec un troisième sont en équilibre entre eux.</p>
<div class="formula-box">
  <div class="formula-box__label">Conversions de température</div>
  <div class="formula-box__formula">T(K) = T(°C) + 273,15</div>
  <div class="formula-box__formula">T(°F) = 9/5 × T(°C) + 32</div>
</div>`
              },
              {
                title: 'Chaleur et capacité thermique',
                content: `<p class="lesson-text">La <strong>chaleur</strong> (Q) est un transfert d'énergie dû à une différence de température. La <strong>capacité thermique massique</strong> (c) d'un matériau quantifie l'énergie nécessaire pour augmenter la température d'un kilogramme de 1°C.</p>
<div class="formula-box">
  <div class="formula-box__label">Formule — Chaleur</div>
  <div class="formula-box__formula">Q = mcΔT</div>
  <dl class="formula-box__where">
    <dt>Q</dt><dd>= chaleur transférée (en J)</dd>
    <dt>m</dt><dd>= masse (en kg)</dd>
    <dt>c</dt><dd>= capacité thermique massique (J/(kg·K))</dd>
    <dt>ΔT</dt><dd>= variation de température</dd>
  </dl>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">Pour chauffer 2 L d'eau (2 kg) de 20°C à 100°C : Q = 2 × 4186 × 80 = <strong>669 760 J ≈ 670 kJ</strong>. C'est pourquoi chauffer l'eau pour le thé prend du temps !</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "Convertir 25°C en Kelvin :",
              options: ["25 K", "248,15 K", "298,15 K", "325 K"],
              correct: 2,
              explanation: "T(K) = T(°C) + 273,15 = 25 + 273,15 = <strong>298,15 K</strong>."
            },
            {
              question: "Quelle quantité de chaleur faut-il pour chauffer 0,5 kg d'eau de 20°C à 80°C ? (c = 4186 J/(kg·K))",
              options: ["2093 J", "125 580 J", "209 300 J", "41 860 J"],
              correct: 1,
              explanation: "Q = mcΔT = 0,5 × 4186 × (80 − 20) = 0,5 × 4186 × 60 = <strong>125 580 J</strong>."
            },
            {
              question: "Le principe zéro de la thermodynamique justifie l'existence de :",
              options: ["L'entropie", "Le thermomètre", "La conservation de l'énergie", "Le travail mécanique"],
              correct: 1,
              explanation: "Le principe zéro justifie l'utilisation du <strong>thermomètre</strong> : si A est en équilibre avec le thermomètre et B aussi, alors A et B sont à la même température."
            }
          ]
        },
        {
          id: 'thermo-gaz-parfaits',
          title: 'Gaz parfaits',
          description: 'Loi des gaz parfaits, théorie cinétique, processus thermodynamiques.',
          tags: ['PV=nRT', 'Gaz idéal', 'Cinétique'],
          lesson: {
            sections: [
              {
                title: 'Loi des gaz parfaits',
                content: `<p class="lesson-text">La <strong>loi des gaz parfaits</strong> relie la pression, le volume, la quantité de matière et la température d'un gaz idéal.</p>
<div class="formula-box">
  <div class="formula-box__label">Loi des gaz parfaits</div>
  <div class="formula-box__formula">PV = nRT</div>
  <dl class="formula-box__where">
    <dt>P</dt><dd>= pression (en Pa)</dd>
    <dt>V</dt><dd>= volume (en m³)</dd>
    <dt>n</dt><dd>= quantité de matière (en mol)</dd>
    <dt>R</dt><dd>= 8,314 J/(mol·K)</dd>
    <dt>T</dt><dd>= température absolue (en K)</dd>
  </dl>
</div>`
              },
              {
                title: 'Énergie cinétique moléculaire',
                content: `<p class="lesson-text">La théorie cinétique des gaz relie la température à l'énergie cinétique moyenne des molécules.</p>
<div class="formula-box">
  <div class="formula-box__label">Énergie cinétique moyenne par molécule</div>
  <div class="formula-box__formula">⟨Ec⟩ = 3/2 × k_B × T</div>
  <dl class="formula-box__where">
    <dt>k_B</dt><dd>= constante de Boltzmann = 1,38 × 10⁻²³ J/K</dd>
    <dt>T</dt><dd>= température absolue (en K)</dd>
  </dl>
</div>
<div class="concept-box">
  <div class="concept-box__label">🔑 Concept clé</div>
  <div class="concept-box__text">La température est directement proportionnelle à l'énergie cinétique moyenne des molécules. Au <strong>zéro absolu</strong> (0 K = −273,15°C), l'énergie cinétique classique serait nulle.</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "1 mole de gaz parfait à 300 K et 1 atm (101 325 Pa) occupe un volume de :",
              options: ["22,4 L", "24,6 L", "30 L", "18,2 L"],
              correct: 1,
              explanation: "V = nRT/P = 1 × 8,314 × 300 / 101325 ≈ 0,0246 m³ = <strong>24,6 L</strong> (22,4 L correspond à 0°C = 273 K)."
            },
            {
              question: "Si on double la température absolue d'un gaz à volume constant, la pression :",
              options: ["Reste la même", "Double", "Quadruple", "Diminue de moitié"],
              correct: 1,
              explanation: "À volume constant, P/T = constante, donc si T double, <strong>P double</strong> également."
            },
            {
              question: "À quelle température les molécules auraient-elles (classiquement) une énergie cinétique nulle ?",
              options: ["0°C", "0 K", "−100°C", "−200 K"],
              correct: 1,
              explanation: "Au <strong>zéro absolu (0 K = −273,15°C)</strong>, l'énergie cinétique classique serait nulle."
            }
          ]
        },
        {
          id: 'thermo-principes',
          title: 'Principes de la thermodynamique',
          description: 'Premier et second principes, entropie, cycles thermodynamiques.',
          tags: ['1er principe', 'Entropie', 'Carnot'],
          lesson: {
            sections: [
              {
                title: 'Premier principe (conservation de l\'énergie)',
                content: `<p class="lesson-text">Le <strong>premier principe</strong> stipule que la variation d'énergie interne d'un système est égale à la chaleur reçue moins le travail fourni par le système.</p>
<div class="formula-box">
  <div class="formula-box__label">Premier principe de la thermodynamique</div>
  <div class="formula-box__formula">ΔU = Q − W</div>
  <dl class="formula-box__where">
    <dt>ΔU</dt><dd>= variation d'énergie interne</dd>
    <dt>Q</dt><dd>= chaleur reçue par le système</dd>
    <dt>W</dt><dd>= travail effectué par le système</dd>
  </dl>
</div>`
              },
              {
                title: 'Second principe et entropie',
                content: `<p class="lesson-text">Le <strong>second principe</strong> introduit la notion d'<strong>entropie</strong> (S), une mesure du désordre. L'entropie d'un système isolé ne peut que croître ou rester constante.</p>
<div class="formula-box">
  <div class="formula-box__label">Variation d'entropie</div>
  <div class="formula-box__formula">ΔS ≥ Q/T</div>
  <div class="formula-box__desc">L'égalité n'est valable que pour les processus réversibles.</div>
</div>
<div class="formula-box">
  <div class="formula-box__label">Rendement maximal — Cycle de Carnot</div>
  <div class="formula-box__formula">η_Carnot = 1 − T_froid / T_chaud</div>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">Une centrale thermique fonctionnant entre T_chaud = 800 K et T_froid = 300 K a un rendement maximal de η = 1 − 300/800 = <strong>62,5%</strong>. En pratique, le rendement est toujours inférieur.</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "Si un gaz reçoit 500 J de chaleur et effectue 200 J de travail, quelle est la variation d'énergie interne ?",
              options: ["700 J", "300 J", "200 J", "−300 J"],
              correct: 1,
              explanation: "ΔU = Q − W = 500 − 200 = <strong>300 J</strong>."
            },
            {
              question: "Le rendement d'une machine de Carnot fonctionnant entre 600 K et 300 K est :",
              options: ["100%", "75%", "50%", "25%"],
              correct: 2,
              explanation: "η = 1 − T_froid/T_chaud = 1 − 300/600 = <strong>50%</strong>."
            },
            {
              question: "L'entropie d'un système isolé :",
              options: ["Peut diminuer", "Reste toujours constante", "Ne peut qu'augmenter ou rester constante", "Dépend de la pression"],
              correct: 2,
              explanation: "Selon le second principe, l'entropie d'un système isolé <strong>ne peut qu'augmenter ou rester constante</strong>."
            }
          ]
        }
      ]
    },

    electricite: {
      id: 'electricite',
      title: 'Électricité & Magnétisme',
      icon: '⚡',
      color: '#8b5cf6',
      description: 'Charges, champs, circuits électriques, magnétisme et induction électromagnétique.',
      chapters: [
        {
          id: 'elec-charges',
          title: 'Charges et champ électrique',
          description: 'Loi de Coulomb, champ électrique, lignes de champ et potentiel.',
          tags: ['Coulomb', 'Champ E', 'Potentiel'],
          lesson: {
            sections: [
              {
                title: 'La loi de Coulomb',
                content: `<p class="lesson-text">La <strong>loi de Coulomb</strong> décrit la force électrostatique entre deux charges ponctuelles. Cette force est proportionnelle au produit des charges et inversement proportionnelle au carré de la distance.</p>
<div class="formula-box">
  <div class="formula-box__label">Loi de Coulomb</div>
  <div class="formula-box__formula">F = k × |q₁ × q₂| / r²</div>
  <dl class="formula-box__where">
    <dt>k</dt><dd>= 8,99 × 10⁹ N·m²/C²</dd>
    <dt>q₁, q₂</dt><dd>= charges (en Coulombs)</dd>
    <dt>r</dt><dd>= distance entre les charges (en m)</dd>
  </dl>
</div>
<div class="concept-box">
  <div class="concept-box__label">🔑 Concept clé</div>
  <div class="concept-box__text">Les charges de même signe se <strong>repoussent</strong>, les charges de signes opposés s'<strong>attirent</strong>. La charge élémentaire est e = 1,6 × 10⁻¹⁹ C.</div>
</div>`
              },
              {
                title: 'Le champ électrique',
                content: `<p class="lesson-text">Le <strong>champ électrique</strong> E⃗ en un point est la force par unité de charge positive que subirait une charge test placée en ce point.</p>
<div class="formula-box">
  <div class="formula-box__label">Champ électrique créé par une charge ponctuelle</div>
  <div class="formula-box__formula">E⃗ = k × q / r² × r̂</div>
  <div class="formula-box__desc">Le champ est radial : il pointe vers l'extérieur pour une charge positive, vers l'intérieur pour une charge négative.</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "Deux charges de +2 μC et −3 μC sont séparées de 0,1 m. La force est :",
              options: ["Attractive de 5,4 N", "Répulsive de 5,4 N", "Attractive de 0,54 N", "Répulsive de 0,54 N"],
              correct: 0,
              explanation: "F = k|q₁q₂|/r² = 8,99×10⁹ × 2×10⁻⁶ × 3×10⁻⁶ / 0,01 = <strong>5,4 N</strong>. Signes opposés → force <strong>attractive</strong>."
            },
            {
              question: "Si la distance entre deux charges double, la force de Coulomb :",
              options: ["Double", "Diminue de moitié", "Diminue d'un facteur 4", "Quadruple"],
              correct: 2,
              explanation: "F ∝ 1/r². Si r × 2, alors F → F/4. La force <strong>diminue d'un facteur 4</strong>."
            },
            {
              question: "Les lignes de champ électrique :",
              options: ["Partent des charges négatives", "Se croisent entre elles", "Partent des charges positives", "Sont toujours circulaires"],
              correct: 2,
              explanation: "Les lignes de champ <strong>partent des charges positives</strong> et arrivent aux charges négatives. Elles ne se croisent jamais."
            }
          ]
        },
        {
          id: 'elec-circuits',
          title: 'Circuits électriques',
          description: 'Loi d\'Ohm, résistances, circuits série et parallèle, lois de Kirchhoff.',
          tags: ['Ohm', 'Kirchhoff', 'Circuits'],
          lesson: {
            sections: [
              {
                title: 'Loi d\'Ohm et résistance',
                content: `<p class="lesson-text">La <strong>loi d'Ohm</strong> relie la tension aux bornes d'un conducteur au courant qui le traverse.</p>
<div class="formula-box">
  <div class="formula-box__label">Loi d'Ohm</div>
  <div class="formula-box__formula">V = R × I</div>
  <dl class="formula-box__where">
    <dt>V</dt><dd>= tension (en Volts)</dd>
    <dt>R</dt><dd>= résistance (en Ohms, Ω)</dd>
    <dt>I</dt><dd>= courant (en Ampères)</dd>
  </dl>
</div>
<div class="formula-box">
  <div class="formula-box__label">Puissance dissipée</div>
  <div class="formula-box__formula">P = V × I = R × I² = V² / R</div>
</div>`
              },
              {
                title: 'Circuits série et parallèle',
                content: `<p class="lesson-text">En <strong>série</strong>, les résistances s'additionnent. En <strong>parallèle</strong>, ce sont leurs inverses qui s'additionnent.</p>
<div class="formula-box">
  <div class="formula-box__label">Résistance équivalente — Série</div>
  <div class="formula-box__formula">R_eq = R₁ + R₂ + R₃ + ...</div>
</div>
<div class="formula-box">
  <div class="formula-box__label">Résistance équivalente — Parallèle</div>
  <div class="formula-box__formula">1/R_eq = 1/R₁ + 1/R₂ + 1/R₃ + ...</div>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">Deux résistances de 6 Ω en parallèle : 1/R_eq = 1/6 + 1/6 = 2/6, donc <strong>R_eq = 3 Ω</strong>. La résistance équivalente en parallèle est toujours plus petite que la plus petite des résistances.</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "Un courant de 2 A traverse une résistance de 10 Ω. La tension est :",
              options: ["5 V", "12 V", "20 V", "0,2 V"],
              correct: 2,
              explanation: "V = RI = 10 × 2 = <strong>20 V</strong>."
            },
            {
              question: "Trois résistances de 12 Ω, 6 Ω et 4 Ω en série donnent une résistance équivalente de :",
              options: ["2 Ω", "22 Ω", "7,3 Ω", "4 Ω"],
              correct: 1,
              explanation: "En série : R_eq = 12 + 6 + 4 = <strong>22 Ω</strong>."
            },
            {
              question: "La puissance dissipée par une résistance de 100 Ω traversée par un courant de 0,5 A est :",
              options: ["50 W", "200 W", "25 W", "100 W"],
              correct: 2,
              explanation: "P = RI² = 100 × 0,5² = 100 × 0,25 = <strong>25 W</strong>."
            }
          ]
        },
        {
          id: 'elec-magnetisme',
          title: 'Magnétisme',
          description: 'Champ magnétique, force de Lorentz, loi de Biot-Savart, induction.',
          tags: ['Champ B', 'Lorentz', 'Induction'],
          lesson: {
            sections: [
              {
                title: 'Force magnétique et force de Lorentz',
                content: `<p class="lesson-text">Une charge en mouvement dans un champ magnétique subit une <strong>force de Lorentz</strong> perpendiculaire à sa vitesse et au champ.</p>
<div class="formula-box">
  <div class="formula-box__label">Force de Lorentz (composante magnétique)</div>
  <div class="formula-box__formula">F⃗ = q × v⃗ × B⃗</div>
  <div class="formula-box__formula">F = qvB sin(θ)</div>
</div>
<div class="concept-box">
  <div class="concept-box__label">🔑 Concept clé</div>
  <div class="concept-box__text">La force magnétique ne fait <strong>jamais de travail</strong> car elle est toujours perpendiculaire à la vitesse. Elle modifie la direction du mouvement, pas la vitesse.</div>
</div>`
              },
              {
                title: 'Induction électromagnétique (loi de Faraday)',
                content: `<p class="lesson-text">La <strong>loi de Faraday</strong> stipule qu'une variation du flux magnétique à travers un circuit induit une force électromotrice (fem).</p>
<div class="formula-box">
  <div class="formula-box__label">Loi de Faraday</div>
  <div class="formula-box__formula">ε = −dΦ_B/dt</div>
  <div class="formula-box__desc">Le signe négatif (loi de Lenz) indique que le courant induit s'oppose à la variation de flux.</div>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">Un alternateur (générateur) fonctionne grâce à la loi de Faraday : une bobine tourne dans un champ magnétique, le flux varie sinusoïdalement, générant une tension alternative.</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "Un proton se déplace parallèlement à un champ magnétique. La force magnétique est :",
              options: ["Maximale", "Nulle", "Perpendiculaire à B", "Parallèle à B"],
              correct: 1,
              explanation: "F = qvB sin(0°) = 0. Si v⃗ est parallèle à B⃗, la force magnétique est <strong>nulle</strong>."
            },
            {
              question: "La loi de Lenz stipule que le courant induit :",
              options: ["Amplifie la variation de flux", "S'oppose à la variation de flux", "Est toujours nul", "Est constant"],
              correct: 1,
              explanation: "La loi de Lenz : le courant induit crée un champ qui <strong>s'oppose à la variation</strong> du flux qui l'a créé."
            },
            {
              question: "La force magnétique sur une charge en mouvement :",
              options: ["Peut accélérer la charge", "Ne modifie que la direction", "Effectue un travail positif", "Est toujours parallèle à v"],
              correct: 1,
              explanation: "La force magnétique est ⊥ à v⃗, donc elle <strong>ne modifie que la direction</strong>, jamais la vitesse (pas de travail)."
            }
          ]
        }
      ]
    },

    optique: {
      id: 'optique',
      title: 'Optique',
      icon: '🔬',
      color: '#06b6d4',
      description: 'Nature de la lumière, réflexion, réfraction, lentilles, interférences et diffraction.',
      chapters: [
        {
          id: 'opt-lumiere',
          title: 'Nature de la lumière',
          description: 'Dualité onde-corpuscule, spectre électromagnétique, vitesse de la lumière.',
          tags: ['Onde', 'Photon', 'Spectre EM'],
          lesson: {
            sections: [
              {
                title: 'Onde électromagnétique',
                content: `<p class="lesson-text">La lumière est une <strong>onde électromagnétique</strong> — une oscillation couplée des champs électrique et magnétique se propageant dans le vide à la vitesse c.</p>
<div class="formula-box">
  <div class="formula-box__label">Vitesse de la lumière et relation fondamentale</div>
  <div class="formula-box__formula">c = λ × f = 3 × 10⁸ m/s</div>
  <dl class="formula-box__where">
    <dt>λ</dt><dd>= longueur d'onde (en m)</dd>
    <dt>f</dt><dd>= fréquence (en Hz)</dd>
  </dl>
</div>
<div class="concept-box">
  <div class="concept-box__label">🔑 Concept clé</div>
  <div class="concept-box__text">La lumière visible couvre les longueurs d'onde de ~380 nm (violet) à ~700 nm (rouge). Au-delà : infrarouge, micro-ondes, radio. En-deçà : ultraviolet, rayons X, rayons gamma.</div>
</div>`
              },
              {
                title: 'Énergie du photon',
                content: `<p class="lesson-text">Einstein a montré que la lumière est aussi constituée de particules — les <strong>photons</strong> — dont l'énergie est proportionnelle à la fréquence.</p>
<div class="formula-box">
  <div class="formula-box__label">Énergie d'un photon</div>
  <div class="formula-box__formula">E = hf = hc/λ</div>
  <dl class="formula-box__where">
    <dt>h</dt><dd>= constante de Planck = 6,626 × 10⁻³⁴ J·s</dd>
  </dl>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "La longueur d'onde d'une lumière de fréquence 5 × 10¹⁴ Hz est :",
              options: ["600 nm", "500 nm", "400 nm", "700 nm"],
              correct: 0,
              explanation: "λ = c/f = 3×10⁸ / 5×10¹⁴ = 6×10⁻⁷ m = <strong>600 nm</strong> (lumière orange)."
            },
            {
              question: "Quel type de rayonnement a la plus haute énergie par photon ?",
              options: ["Infrarouge", "Lumière visible", "Rayons gamma", "Micro-ondes"],
              correct: 2,
              explanation: "E = hf : les <strong>rayons gamma</strong> ont la fréquence la plus élevée, donc l'énergie par photon la plus grande."
            },
            {
              question: "La dualité onde-corpuscule signifie que :",
              options: ["La lumière est uniquement une onde", "La lumière est uniquement un corpuscule", "La lumière se comporte comme onde et comme particule selon l'expérience", "Les ondes et les particules sont identiques"],
              correct: 2,
              explanation: "La dualité onde-corpuscule : la lumière se manifeste <strong>comme onde</strong> (interférences) <strong>ou comme particule</strong> (effet photoélectrique) selon l'expérience."
            }
          ]
        },
        {
          id: 'opt-reflexion-refraction',
          title: 'Réflexion et réfraction',
          description: 'Lois de Snell-Descartes, réflexion totale interne, prisme.',
          tags: ['Snell', 'Réfraction', 'Réflexion'],
          lesson: {
            sections: [
              {
                title: 'Lois de la réflexion et de la réfraction',
                content: `<p class="lesson-text">Quand la lumière passe d'un milieu à un autre, elle change de direction selon la <strong>loi de Snell-Descartes</strong>.</p>
<div class="formula-box">
  <div class="formula-box__label">Loi de Snell-Descartes</div>
  <div class="formula-box__formula">n₁ sin(θ₁) = n₂ sin(θ₂)</div>
  <dl class="formula-box__where">
    <dt>n₁, n₂</dt><dd>= indices de réfraction des milieux</dd>
    <dt>θ₁</dt><dd>= angle d'incidence</dd>
    <dt>θ₂</dt><dd>= angle de réfraction</dd>
  </dl>
</div>
<div class="formula-box">
  <div class="formula-box__label">Angle critique (réflexion totale)</div>
  <div class="formula-box__formula">sin(θ_c) = n₂/n₁ (avec n₁ > n₂)</div>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">La fibre optique fonctionne grâce à la <strong>réflexion totale interne</strong> : la lumière entre dans le verre (n ≈ 1,5) et rebondit continuellement sans jamais sortir, car l'angle dépasse l'angle critique.</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "Un rayon passe de l'air (n=1) au verre (n=1,5) avec θ₁ = 30°. L'angle de réfraction θ₂ est :",
              options: ["45°", "19,5°", "20°", "48,6°"],
              correct: 1,
              explanation: "sin(θ₂) = n₁sin(θ₁)/n₂ = 1 × sin(30°)/1,5 = 0,5/1,5 = 0,333. θ₂ = arcsin(0,333) ≈ <strong>19,5°</strong>."
            },
            {
              question: "La réflexion totale interne se produit quand :",
              options: ["La lumière passe d'un milieu moins dense à un milieu plus dense", "L'angle d'incidence est nul", "La lumière passe d'un milieu plus dense à un moins dense avec θ > θ_c", "La lumière est perpendiculaire à la surface"],
              correct: 2,
              explanation: "La réflexion totale se produit quand la lumière passe <strong>d'un milieu dense vers un moins dense</strong> et que l'angle d'incidence dépasse l'angle critique."
            },
            {
              question: "L'indice de réfraction d'un milieu est 2. La vitesse de la lumière dans ce milieu est :",
              options: ["6 × 10⁸ m/s", "3 × 10⁸ m/s", "1,5 × 10⁸ m/s", "1 × 10⁸ m/s"],
              correct: 2,
              explanation: "v = c/n = 3×10⁸/2 = <strong>1,5 × 10⁸ m/s</strong>."
            }
          ]
        },
        {
          id: 'opt-interferences',
          title: 'Interférences et diffraction',
          description: 'Expérience de Young, diffraction par une fente, réseaux.',
          tags: ['Young', 'Diffraction', 'Réseau'],
          lesson: {
            sections: [
              {
                title: 'Interférences (expérience de Young)',
                content: `<p class="lesson-text">L'<strong>expérience des fentes de Young</strong> démontre la nature ondulatoire de la lumière : deux sources cohérentes créent un motif d'interférences constructives et destructives.</p>
<div class="formula-box">
  <div class="formula-box__label">Position des franges brillantes</div>
  <div class="formula-box__formula">y_m = m × λ × L / d</div>
  <dl class="formula-box__where">
    <dt>m</dt><dd>= ordre d'interférence (0, ±1, ±2, ...)</dd>
    <dt>λ</dt><dd>= longueur d'onde</dd>
    <dt>L</dt><dd>= distance écran-fentes</dd>
    <dt>d</dt><dd>= écart entre les fentes</dd>
  </dl>
</div>`
              },
              {
                title: 'Diffraction par une fente unique',
                content: `<p class="lesson-text">La <strong>diffraction</strong> se produit quand une onde rencontre un obstacle ou une ouverture de taille comparable à sa longueur d'onde.</p>
<div class="formula-box">
  <div class="formula-box__label">Minima de diffraction (fente unique)</div>
  <div class="formula-box__formula">a × sin(θ) = m × λ (m = ±1, ±2, ...)</div>
  <dl class="formula-box__where">
    <dt>a</dt><dd>= largeur de la fente</dd>
  </dl>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "Dans l'expérience de Young, si la longueur d'onde augmente, l'interfrange :",
              options: ["Diminue", "Augmente", "Reste la même", "Disparaît"],
              correct: 1,
              explanation: "Interfrange i = λL/d. Si λ augmente, l'interfrange <strong>augmente</strong> proportionnellement."
            },
            {
              question: "L'interférence constructive se produit quand la différence de marche vaut :",
              options: ["λ/2", "λ/4", "mλ (m entier)", "3λ/4"],
              correct: 2,
              explanation: "Interférence constructive : δ = <strong>mλ</strong> (m entier). Les ondes arrivent en phase."
            },
            {
              question: "La diffraction est plus prononcée quand :",
              options: ["La fente est beaucoup plus grande que λ", "La fente est de taille comparable à λ", "La fente est infiniment petite", "Il n'y a pas de fente"],
              correct: 1,
              explanation: "La diffraction est maximale quand la taille de l'ouverture est <strong>comparable à la longueur d'onde</strong>."
            }
          ]
        }
      ]
    },

    quantique: {
      id: 'quantique',
      title: 'Physique Quantique',
      icon: '🌀',
      color: '#ec4899',
      description: 'Effet photoélectrique, dualité onde-particule, équation de Schrödinger et atome.',
      chapters: [
        {
          id: 'quant-photoelectrique',
          title: 'Effet photoélectrique',
          description: 'Quantification de la lumière, seuil de fréquence, énergie cinétique des photoélectrons.',
          tags: ['Photon', 'Seuil', 'Einstein'],
          lesson: {
            sections: [
              {
                title: 'Description et observations',
                content: `<p class="lesson-text">L'<strong>effet photoélectrique</strong> est l'émission d'électrons par un matériau éclairé par de la lumière. Les observations expérimentales ont été inexplicables par la physique classique :</p>
<p class="lesson-text">• Existence d'une <strong>fréquence seuil</strong> en-dessous de laquelle aucun électron n'est émis, quelle que soit l'intensité.<br>• L'énergie cinétique des électrons émis dépend de la <strong>fréquence</strong>, pas de l'intensité.<br>• L'émission est <strong>instantanée</strong>.</p>
<div class="concept-box">
  <div class="concept-box__label">🔑 Concept clé</div>
  <div class="concept-box__text">Einstein a résolu ce problème en 1905 en proposant que la lumière est constituée de <strong>photons</strong> — des « paquets » d'énergie E = hf. Un seul photon transfère son énergie à un seul électron.</div>
</div>`
              },
              {
                title: 'Équation d\'Einstein pour l\'effet photoélectrique',
                content: `<div class="formula-box">
  <div class="formula-box__label">Équation d'Einstein</div>
  <div class="formula-box__formula">E_photon = W + Ec_max</div>
  <div class="formula-box__formula">hf = W + ½mv²_max</div>
  <dl class="formula-box__where">
    <dt>W</dt><dd>= travail d'extraction (work function) du matériau</dd>
    <dt>Ec_max</dt><dd>= énergie cinétique maximale des photoélectrons</dd>
  </dl>
</div>
<div class="formula-box">
  <div class="formula-box__label">Fréquence seuil</div>
  <div class="formula-box__formula">f₀ = W / h</div>
  <div class="formula-box__desc">En-dessous de f₀, l'énergie du photon est insuffisante pour arracher un électron.</div>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">Le sodium a un travail d'extraction de W = 2,28 eV. La fréquence seuil est f₀ = 2,28 × 1,6×10⁻¹⁹ / 6,626×10⁻³⁴ ≈ <strong>5,5 × 10¹⁴ Hz</strong> (lumière verte). La lumière rouge (f plus faible) ne produira pas d'effet photoélectrique sur le sodium.</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "L'effet photoélectrique prouve que la lumière :",
              options: ["Est une onde pure", "A un comportement corpusculaire", "Se propage dans l'éther", "N'a pas d'énergie"],
              correct: 1,
              explanation: "L'effet photoélectrique démontre le <strong>comportement corpusculaire</strong> de la lumière (photons)."
            },
            {
              question: "Si la fréquence de la lumière est doublée (au-dessus du seuil), l'énergie cinétique max des photoélectrons :",
              options: ["Double", "Augmente de hf", "Reste la même", "Diminue"],
              correct: 1,
              explanation: "Ec = hf − W. Si f → 2f : Ec' = 2hf − W = Ec + hf. L'Ec max <strong>augmente de hf</strong>."
            },
            {
              question: "Augmenter l'intensité lumineuse (au-dessus du seuil) :",
              options: ["Augmente l'Ec des électrons", "Augmente le nombre d'électrons émis", "Change la fréquence seuil", "Ne change rien"],
              correct: 1,
              explanation: "Plus d'intensité = plus de photons = <strong>plus d'électrons émis</strong>. Mais chaque électron a la même Ec max."
            }
          ]
        },
        {
          id: 'quant-dualite',
          title: 'Dualité onde-particule',
          description: 'Hypothèse de de Broglie, principe d\'incertitude de Heisenberg.',
          tags: ['de Broglie', 'Heisenberg', 'Dualité'],
          lesson: {
            sections: [
              {
                title: 'Hypothèse de de Broglie',
                content: `<p class="lesson-text">Louis de Broglie a proposé en 1924 que la <strong>dualité onde-corpuscule</strong> s'étend à toute la matière : chaque particule possède une longueur d'onde associée.</p>
<div class="formula-box">
  <div class="formula-box__label">Longueur d'onde de de Broglie</div>
  <div class="formula-box__formula">λ = h / p = h / (mv)</div>
  <dl class="formula-box__where">
    <dt>λ</dt><dd>= longueur d'onde (en m)</dd>
    <dt>p</dt><dd>= quantité de mouvement = mv</dd>
    <dt>h</dt><dd>= constante de Planck</dd>
  </dl>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">Un électron accéléré sous 100 V a λ ≈ 0,12 nm, comparable aux distances interatomiques. Un ballon de football (0,4 kg, 30 m/s) a λ ≈ 5,5 × 10⁻³⁵ m — totalement indétectable ! C'est pourquoi les effets quantiques ne sont visibles qu'à l'échelle atomique.</div>
</div>`
              },
              {
                title: 'Principe d\'incertitude de Heisenberg',
                content: `<p class="lesson-text">Le <strong>principe d'incertitude de Heisenberg</strong> impose une limite fondamentale à la précision avec laquelle on peut connaître simultanément la position et la quantité de mouvement d'une particule.</p>
<div class="formula-box">
  <div class="formula-box__label">Inégalité de Heisenberg</div>
  <div class="formula-box__formula">Δx × Δp ≥ ℏ/2</div>
  <dl class="formula-box__where">
    <dt>Δx</dt><dd>= incertitude sur la position</dd>
    <dt>Δp</dt><dd>= incertitude sur la quantité de mouvement</dd>
    <dt>ℏ</dt><dd>= h/(2π) ≈ 1,055 × 10⁻³⁴ J·s</dd>
  </dl>
</div>
<div class="concept-box">
  <div class="concept-box__label">🔑 Concept clé</div>
  <div class="concept-box__text">Ce n'est <strong>pas</strong> une limitation technologique ! C'est une propriété fondamentale de la nature. Plus on connaît précisément la position, plus la quantité de mouvement devient indéterminée, et vice versa.</div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "La longueur d'onde de de Broglie d'un électron accéléré :",
              options: ["Augmente avec la vitesse", "Diminue avec la vitesse", "Ne dépend pas de la vitesse", "Est toujours nulle"],
              correct: 1,
              explanation: "λ = h/(mv). Si v augmente, λ <strong>diminue</strong>."
            },
            {
              question: "Le principe d'incertitude de Heisenberg implique que :",
              options: ["Nos instruments ne sont pas assez précis", "On ne peut connaître simultanément x et p avec une précision arbitraire", "L'énergie n'est pas conservée", "Le temps est relatif"],
              correct: 1,
              explanation: "C'est une <strong>limite fondamentale de la nature</strong> : Δx × Δp ≥ ℏ/2."
            },
            {
              question: "Pourquoi ne voit-on pas d'effets quantiques dans la vie quotidienne ?",
              options: ["La constante de Planck est trop grande", "Les objets macroscopiques ont des λ de Broglie extrêmement petites", "La mécanique quantique est fausse à grande échelle", "La gravité annule les effets quantiques"],
              correct: 1,
              explanation: "λ = h/(mv) est extrêmement petit pour les objets macroscopiques (~ 10⁻³⁵ m), rendant les effets ondulatoires <strong>indétectables</strong>."
            }
          ]
        },
        {
          id: 'quant-atome',
          title: 'Structure de l\'atome',
          description: 'Modèle de Bohr, niveaux d\'énergie, spectres atomiques, nombres quantiques.',
          tags: ['Bohr', 'Spectres', 'Niveaux'],
          lesson: {
            sections: [
              {
                title: 'Modèle de Bohr de l\'atome d\'hydrogène',
                content: `<p class="lesson-text">Le <strong>modèle de Bohr</strong> (1913) postule que les électrons orbitent sur des orbites discrètes de rayon et d'énergie quantifiés.</p>
<div class="formula-box">
  <div class="formula-box__label">Niveaux d'énergie de l'hydrogène</div>
  <div class="formula-box__formula">Eₙ = −13,6 eV / n²</div>
  <dl class="formula-box__where">
    <dt>n</dt><dd>= nombre quantique principal (1, 2, 3, ...)</dd>
    <dt>E₁ = −13,6 eV</dt><dd>= énergie de l'état fondamental</dd>
  </dl>
</div>
<div class="formula-box">
  <div class="formula-box__label">Énergie d'un photon émis/absorbé</div>
  <div class="formula-box__formula">E_photon = |Eₙ₂ − Eₙ₁| = 13,6 × |1/n₁² − 1/n₂²| eV</div>
</div>
<div class="example-box">
  <div class="example-box__label">💡 Exemple concret</div>
  <div class="example-box__text">La transition n=2 → n=1 émet un photon de E = 13,6×(1 − 1/4) = <strong>10,2 eV</strong>, dans l'ultraviolet (série de Lyman). C'est le principe des lampes à décharge !</div>
</div>`
              },
              {
                title: 'Nombres quantiques',
                content: `<p class="lesson-text">L'état d'un électron dans un atome est décrit par <strong>quatre nombres quantiques</strong> :</p>
<div class="concept-box">
  <div class="concept-box__label">🔑 Les 4 nombres quantiques</div>
  <div class="concept-box__text">
    <strong>n</strong> (principal) : 1, 2, 3... → détermine l'énergie et la taille de l'orbitale<br>
    <strong>ℓ</strong> (azimutal) : 0 à n−1 → détermine la forme (s, p, d, f)<br>
    <strong>mₗ</strong> (magnétique) : −ℓ à +ℓ → détermine l'orientation spatiale<br>
    <strong>mₛ</strong> (spin) : +½ ou −½ → détermine le spin de l'électron
  </div>
</div>`
              }
            ]
          },
          quiz: [
            {
              question: "L'énergie de l'état fondamental (n=1) de l'hydrogène est :",
              options: ["+13,6 eV", "−13,6 eV", "0 eV", "−3,4 eV"],
              correct: 1,
              explanation: "E₁ = −13,6/1² = <strong>−13,6 eV</strong>. Le signe négatif indique que l'électron est lié."
            },
            {
              question: "Quelle énergie faut-il pour ioniser un atome d'hydrogène depuis n=1 ?",
              options: ["0 eV", "3,4 eV", "10,2 eV", "13,6 eV"],
              correct: 3,
              explanation: "Ioniser = amener E de −13,6 à 0 eV, soit <strong>13,6 eV</strong>."
            },
            {
              question: "Combien de valeurs peut prendre mₗ pour ℓ = 2 ?",
              options: ["2", "3", "5", "7"],
              correct: 2,
              explanation: "mₗ va de −ℓ à +ℓ : −2, −1, 0, +1, +2 → <strong>5 valeurs</strong> (2ℓ + 1)."
            }
          ]
        }
      ]
    }
  };

  // ── Public API ──
  function getDomains() {
    return Object.values(domains);
  }

  function getDomain(domainId) {
    return domains[domainId] || null;
  }

  function getChapter(chapterId) {
    for (const domain of Object.values(domains)) {
      const chapter = domain.chapters.find(ch => ch.id === chapterId);
      if (chapter) {
        return { ...chapter, domain: { id: domain.id, title: domain.title, icon: domain.icon, color: domain.color } };
      }
    }
    return null;
  }

  function getChaptersByDomain(domainId) {
    const domain = domains[domainId];
    return domain ? domain.chapters : [];
  }

  function getAllChapterIds() {
    const ids = [];
    for (const domain of Object.values(domains)) {
      for (const ch of domain.chapters) {
        ids.push(ch.id);
      }
    }
    return ids;
  }

  function getDomainForChapter(chapterId) {
    for (const domain of Object.values(domains)) {
      if (domain.chapters.find(ch => ch.id === chapterId)) {
        return domain;
      }
    }
    return null;
  }

  return { getDomains, getDomain, getChapter, getChaptersByDomain, getAllChapterIds, getDomainForChapter };
})();
