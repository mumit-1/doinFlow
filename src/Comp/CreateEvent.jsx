import React from 'react';

const CreateEvent = () => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;

          const title = form.title.value;
          const description = form.description.value;
  const category = form.category.value;
  const communityId = form.communityId.value;
  const eventTime = new Date(form.eventTime.value).toISOString(); // Convert to ISO string
  const isTicketed = form.isTicketed.value === 'true'; // Convert to boolean
  const ticketPrice = parseFloat(form.ticketPrice.value);
  const seatCount = parseInt(form.seatCount.value, 10);
  const type = form.type.value;
  const needVolunteer = form.needVolunteer.checked;

  const eventData = {
    title,
    description,
    category,
    communityId,
    eventTime,
    isTicketed,
    ticketPrice,
    seatCount,
    type,
    needVolunteer
  };

  console.log(eventData);
    }
    return (
        <div>
            <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-full  border p-4">
          <legend className="fieldset-legend text-lg font-bold">Event Details</legend>
  <div className='flex gap-5'>
      <div className='space-y-2'>
          <label className="label">Title</label>
          <input type="text" className="input input-bordered w-full" placeholder="Event Title" name="title" />
          <label className="label">Description</label>
          <textarea className="textarea textarea-bordered w-full" placeholder="Event description" name="description"></textarea>
          <label className="label">Category</label>
          <input type="text" className="input input-bordered w-full" placeholder="Category" name="category" />
          <label className="label">Community ID</label>
          <input type="text" className="input input-bordered w-full" placeholder="Community ID" name="communityId" />
          <label className="label">Event Time</label>
          <input type="datetime-local" className="input input-bordered w-full" name="eventTime" />
      </div>
      <div  className='space-y-2'>
      
          <label className="label">Is Ticketed?</label>
          <select className="select select-bordered w-full" name="isTicketed">
            <option value="true">Yes</option>
            <option value="false">No</option>
          </select>
      
          <label className="label">Ticket Price</label>
          <input type="number" className="input input-bordered w-full" placeholder="20" name="ticketPrice" />
      
          <label className="label">Seat Count</label>
          <input type="number" className="input input-bordered w-full" placeholder="100" name="seatCount" />
      
          <label className="label">Type</label>
          <select className="select select-bordered w-full" name="type">
            <option value="public">Public</option>
            <option value="private">Private</option>
          </select>
      </div>
  </div>

  <label className="cursor-pointer label">
    <span className="label-text">Need Volunteers?</span>
    <input type="checkbox" className="toggle" name="needVolunteer" />
  </label>

  <button className="btn btn-primary w-full mt-4">Submit</button>
</form>

        </div>
    );
};

export default CreateEvent;