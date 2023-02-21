const CommentsForm = () => {
  return (
    <form className="w-full">
      <span className="flex w-full">
        <div className="flex flex-col mx-2 w-full my-2">
          <label className="text-sm mb-2">نام و نام خانوادگی</label>
          <input
            type="text"
            name="name"
            className="h-10 rounded-md border px-2 input w-full border-bordercolor"
          />
        </div>
        <div className="flex flex-col mx-2 w-full my-2">
          <label className="text-sm mb-2">شماره تماس</label>
          <input
            type="text"
            name="phone"
            className="border border-bordercolor px-2 placeholder:text-[11px] h-10 rounded-md input w-full"
            placeholder="شماره تماس شما نمایش داده نمیشود."
          />
        </div>
      </span>
      <div className="flex flex-col mx-2 h-20">
        <label className="text-sm mb-2">نظر شما</label>
        <textarea
          type="text"
          className="border border-bordercolor border-solid p-2 rounded-md focus:outline-0 w-full"
        />
      </div>
    </form>
  );
};
export default CommentsForm;
