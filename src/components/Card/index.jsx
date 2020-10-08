import React, { useState } from 'react';
import Modal from 'react-modal';

import './styles.css';

Modal.setAppElement('#root');

export default function Card({ title, date, image }) {
	const [modalOpen, setModalOpen] = useState(false);
	return (
		<div className="card-hover">
			<a
				onClick={() => {
					setModalOpen(true);
				}}
			>
				<div className="card-background">
					<div className="card-header">
						<h2>{title}</h2>
					</div>
					<div className="card-content">
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
							itaque laboriosam facilis soluta, natus repellendus aspernatur
							quasi. Unde distinctio impedit est ipsa porro. Quo laborum,
							corporis tenetur atque vel quisquam? Saepe quos ea, quo quam
							voluptatibus illum repellat beatae. Porro aperiam qui expedita
							incidunt voluptate! Amet, optio? Iste qui enim accusantium fugiat.
						</p>
					</div>
					<div className="card-rest">
						<p>{date}</p>
						<img
							src={image}
							alt="Profile image"
						/>
					</div>
				</div>
			</a>
			<Modal isOpen={modalOpen}>
			<div className="button-block">
				<button
					onClick={() => {
						setModalOpen(false);
					}}
				>
					<i className="fas fa-times"></i>
				</button>
			</div>
			<div className="container">
				<div className="modal-content">
					<h1>Just for fun</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos
						vero deserunt eveniet delectus sequi aliquid, dicta qui provident
						praesentium a tempore voluptates quas molestiae obcaecati non fugiat
						nam neque beatae. Lorem ipsum, dolor sit amet consectetur
						adipisicing elit. Explicabo tenetur soluta culpa laboriosam
						obcaecati quisquam suscipit, doloribus vero ratione quod voluptate
						perferendis quis aliquam voluptatibus quas odio sit cupiditate ut.
						Lorem ipsum dolor sit amet consectetur, adipisicing elit.
						Perspiciatis quibusdam amet molestias nemo optio illum numquam dicta
						perferendis. Illo blanditiis quaerat tempora culpa omnis totam eum
						deserunt eligendi optio qui? Lorem ipsum dolor, sit amet consectetur
						adipisicing elit. Nulla doloribus, unde vel, voluptatum reiciendis
						delectus amet veniam tenetur non rerum enim nemo neque aliquam. Nam
						amet totam quae laboriosam animi. Lorem ipsum dolor sit amet
						consectetur adipisicing elit. Optio quibusdam accusantium libero in
						sequi perspiciatis similique eaque, at veritatis itaque ipsa quaerat
						eos ex sit ipsam fuga exercitationem inventore laudantium? Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Ab similique,
						dolore iusto minus corporis voluptatum qui, et repudiandae adipisci
						neque dolor? Dignissimos veniam adipisci similique quibusdam
						temporibus. Sequi, dolorum et?
					</p>
					<a href="https://github.com/brunordgs" target="_blank">
						<button>Check out my GitHub</button>
					</a>
				</div>
			</div>
		</Modal>
		</div>
	);
}
