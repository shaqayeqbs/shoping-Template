import CommentsForm from "./CommentsForm";
import CommentsList from "./CommentsList";
// import b from '../../../../../../public/images/plant.png'

const commentList = [
  {
    id: 1,
    name: "امیر",
    image: b,
    date: "30 آذر 1401",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    id: 2,
    name: "امیر",
    image: b,
    date: "30 آذر 1401",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
  {
    id: 3,
    name: "امیر",
    image: b,
    date: "30 آذر 1401",
    text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است، برای شرایط فعلی تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.",
  },
];

const Comments = () => {
  return (
    <div className="bg-[white] px-8 py-4 rounded-xl">
      <p className="border-b border-bordercolor w-full py-4 font-bold">
        سوال یا نظرت رو ثبت کن
      </p>
      <CommentsForm />
      <CommentsList comments={commentList} />
    </div>
  );
};
export default Comments;
