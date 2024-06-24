function AddTodo() {
  return (
    <div className="container ">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="Enter Todo here" />
        </div>
        <div class="col-4">
          <input type="date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default AddTodo;
