import style from "./About.module.css";

export default function About() {
  return(
    <div className={style.container}>
      <h1>Sobre Mí</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum, alias
        atque laborum natus eius quis cupiditate rem dolor ducimus repudiandae
        odio, temporibus provident quisquam libero rerum nulla commodi quaerat
        nisi?
      </p>
      <hr />
      <h2>Mi misión</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et blanditiis
        veritatis voluptate ducimus tempora dolores, ipsa culpa numquam,
        distinctio nemo ullam! Tenetur molestiae ut asperiores quidem libero
        repellendus quibusdam illum.
      </p>
      <hr />
      <h2>Mi experiencia en Soy Henry</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus
        dignissimos recusandae mollitia sequi consequuntur? Odio, suscipit!
        Magnam in voluptates, optio veniam eos, accusantium enim eveniet aut
        pariatur quam deleniti provident!
      </p>
    </div>
  );
}
