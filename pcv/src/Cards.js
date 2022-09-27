import "./assets/scss/cover-letter.scss";
import * as React from "react";
import highFive from "./assets/images/high-five.gif";
import flowers from "./assets/images/flowers.gif";
import puzzle from "./assets/images/puzzle.gif";
import Card from "./Card";

function Cards() {
  return (
    <div className="container-cards">
      <Card cardImageSrc={highFive} alt = "dog's giving high fives" title="Values">
        What I value the most is having a sense of community wherever I go. Having been through so many major changes in
        my life, I always take comfort when I have a strong support system always rooting for me to grow and challenge
        myself. I belive that having people around me with similar passions and goals can foster creativity far beyond
        what I could think of on my own.
      </Card>
      <Card cardImageSrc={flowers} alt = "happy flowers" title="Strengths">
        My strengths lie in collaboration and teamwork. When working alongside others, I often stop and try to
        understand their perspective. Collaborating with others is always something I look forward to as I can see each
        person's unique strengths that they bring and try to apply that to different areas of a project. I'm also
        passionate about what I work on. For me, there's no point in doing something if I don't believe that it isn't
        going to benefit me or someone else. When it comes to something I'm passionate about, I'll keep challenging and
        improving myself!
      </Card>
      <Card cardImageSrc={puzzle} alt = "puzzles giving high fives" title="What I'm looking for">
        I want to be a part of a team where I can <i>fit</i> in! Being able to surround myself by honest and
        hard-working people is the type of environment I dream of being in. I'm looking for somewhere that can provide
        me the resources to improve myself not only as a coder, but as a person. I want to be passionate not only about
        the product, but the people who are using it. Just as I look at Pinterest for inspiration, I'd love to be in a
        place that's creating outlets for it.
      </Card>
    </div>
  );
}
export default Cards;
