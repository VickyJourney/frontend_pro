const Form = (props) => {
  const { addItem, formEl } = props;

  return (
    <form ref={formEl} className='d-flex' onSubmit={addItem}>
      <input name='todo' type='text' className='form-control' />
      <button type='submit' className='btn btn-primary'>
        Send
      </button>
    </form>
  );
};

export default Form;
