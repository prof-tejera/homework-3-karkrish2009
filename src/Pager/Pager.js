import "./Pager.css";
import PagerButton from "components/Button/PagerButton";


const Pager = () => {

  const start = 1;
  const stop = 11;
  const step = 1;

  let numbers = Array.from({ length: (stop - start) / step}, (_, i) => start + (i * step));


  //console.log(numbers);

  return (

    <div class="pagination">
      {numbers ? numbers.map(number => <PagerButton text={number} />) : ""}
    </div>
  );
};

export default Pager;

/*


<a href="#">1</a>
<a class="active" href="#">2</a>
<a href="#">3</a>
<a href="#">4</a>
<a href="#">5</a>
<a href="#">6</a>
<a href="#">&raquo;</a>

*/
