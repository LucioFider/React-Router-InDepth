import { Outlet } from "react-router-dom";

export default function CareersLayout() {
  return (
    <div className="careers-layout">
      <h2>Careers</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Mollitia nihil
        molestias quidem soluta suscipit sit modi beatae aperiam, esse animi cum
        dolore repellendus? Corrupti, enim libero unde laboriosam voluptatem
        neque.
      </p>

      <Outlet />
    </div>
  );
}
