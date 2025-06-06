import React, { useContext, useState } from 'react';
import { AuthProvider } from './Provider';

const CreateEvent = () => {
    const {user} = useContext(AuthProvider);
  const handleSubmit = async (e) => {
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
    needVolunteer,
    title,
    description,
    category,
    communityId,
    eventTime,
    isTicketed,
    ticketPrice,
    seatCount,
    type,
  };

  
    fetch("https://doingflow.vercel.app/api/events", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${user?.token || token1}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(eventData),
    })
    .then(res=>res.json())
    .then(data=>console.log(data))

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     console.log("Event created successfully:", result);
//     alert("Event created successfully!");
//     form.reset(); // Optional: Reset the form
//   } catch (error) {
//     console.error("Error submitting the form:", error);
//     alert("Failed to create event.");
//   }
}
    return (
        <div className=''>
          <h2 className=" text-2xl font-semibold mb-2">Add Event</h2>
<p className='text-sm opacity-70 mb-4 lg:w-3/5 md:w-4/5'>Use this form to create a new event. Add details like title, description, category, date and time, ticket info or if you need volunteers.</p>
            <form onSubmit={handleSubmit} className="fieldset bg-base-200 border-base-300 rounded-box w-full  border p-4  ">
  <div className='lg:flex md:flex gap-5'>
      <div className='space-y-2'>
          <label className="label">Title</label>
          <input type="text" className="input input-bordered w-full" placeholder="Event Title" name="title" />
          <label className="label">Description</label>
          <textarea className="textarea textarea-bordered w-full" placeholder="Event description" name="description"></textarea>
          <label className="label">Category</label>
          <input type="text" className="input input-bordered w-full" placeholder="Category" name="category" />
          <label className="label">Community ID</label>
          <input type="text" className="input input-bordered w-full" placeholder="Community ID" name="communityId" />
      </div>
      <div  className='space-y-2'>
          <label className="label">Event Time</label>
          <input type="datetime-local" className="input input-bordered w-full" name="eventTime" />
      
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

  <label className="cursor-pointer label -mt-9">
    <span className="label-text">Need Volunteers?</span>
    <input type="checkbox" className="toggle" name="needVolunteer" />
  </label>

  <button className="btn btn-primary w-full mt-4">Submit</button>
</form>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis facere voluptas mollitia laboriosam natus quod! Enim similique qui amet! Ipsum ipsa harum dolore. Ad reiciendis, sequi laborum totam non commodi quo adipisci delectus accusamus deleniti expedita veritatis a temporibus unde in neque molestias suscipit impedit magnam dolorem optio mollitia! Laudantium placeat maxime rerum alias est? Sint ducimus quo, sequi laudantium aliquid rem tempora. Dolorum ipsa dignissimos suscipit facilis. Id perspiciatis rem nesciunt laboriosam, repellat quas praesentium accusamus asperiores veniam voluptatum tempora placeat doloribus aperiam velit repudiandae a voluptas ad error optio porro, magnam earum quisquam. Pariatur impedit similique et sed quis repellat porro aliquid ad accusamus totam fugiat mollitia nam cum reprehenderit inventore dolor eum, dolore eveniet quasi sit error fuga! Nulla id quas, quasi sit delectus, necessitatibus reiciendis illum velit numquam itaque omnis magnam voluptates expedita. Doloribus nobis sint pariatur tempore inventore eius ea iste labore sequi numquam sed ex enim fugiat laborum incidunt omnis nihil, eligendi dicta voluptatibus et cumque tenetur. Reiciendis, laborum perferendis magnam nihil dolores ullam ipsam ducimus, quae repellendus molestiae placeat recusandae error exercitationem dolorum aliquam ipsum velit? Nisi error officia cupiditate laboriosam neque deserunt nam, minima accusamus architecto repudiandae! Nam fugit doloribus inventore odio voluptatum eveniet vitae. Culpa voluptatum quas fugiat, voluptate minima repellendus ducimus, nobis sunt quo sit velit. Excepturi vel mollitia adipisci vero aliquid earum ipsa voluptate, quaerat porro id nemo libero ab non minima similique praesentium a inventore recusandae modi? Dolorem ad laudantium laborum aliquid praesentium alias ratione quos distinctio ducimus, suscipit fugiat temporibus earum labore voluptatum qui doloribus? Possimus, eum recusandae! Eligendi facilis earum, quod numquam maiores sint corrupti ab magni illum ad? Excepturi sit, delectus aliquam reiciendis nostrum esse odit repudiandae illum rerum culpa dolores odio magnam eligendi tenetur quisquam iusto. Praesentium iusto eaque blanditiis maiores temporibus tempora nam tenetur laboriosam, ullam nostrum omnis. Saepe possimus eos in nobis sit quam aliquid voluptatibus aliquam quod reprehenderit molestiae inventore facilis impedit quaerat provident adipisci soluta beatae rem, sint minima corrupti, unde ea modi est! Consectetur culpa modi in dolores alias, sed corporis accusamus nisi, nemo saepe voluptate reprehenderit veritatis enim aspernatur doloribus fugit, impedit debitis non facere dolor minus possimus laudantium molestiae. Inventore veniam quas eaque accusantium soluta explicabo maiores dolores suscipit temporibus quae vel cupiditate minima, odio veritatis totam magnam? Velit, veritatis quidem quisquam repellendus delectus quia eius reiciendis fuga ea impedit. Culpa repellendus molestias distinctio quia facilis eaque at sint ea veniam inventore! Voluptas eaque dicta, incidunt, vel non quibusdam nemo iusto eius modi quis porro sint nihil fugit! Commodi ex deleniti repellendus? Doloremque suscipit illum iusto, ea illo explicabo maiores animi rerum numquam maxime, architecto, repudiandae deserunt molestiae? Minus aspernatur error unde ex assumenda recusandae, dolorem non! Itaque omnis, perferendis nesciunt dolorum quam officiis, hic praesentium deserunt vel quasi unde! Rerum quos exercitationem consequatur beatae, facilis, vitae soluta iure impedit praesentium corporis doloremque aspernatur illum illo eos provident optio rem, quis voluptatum ut. Aspernatur nisi nesciunt cupiditate? Velit maiores placeat libero debitis alias, voluptatum voluptatibus natus quaerat!</p>
        </div>
    );
};

export default CreateEvent;