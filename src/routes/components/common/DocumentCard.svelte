<script>
	import { beautify } from '../../../utils/DateUtils';

	const MAX_TITLE_LENGTH = 30; //showing only the first 30 chars of the title

	let header = 'Empty Document :(';

	export let id;
	export let title;
	export let content;
	export let created;
	export let updated;

	if (title) {
		if (title.length > MAX_TITLE_LENGTH) {
			header = title.substring(0, MAX_TITLE_LENGTH) + '...';
		} else {
			header = title;
		}
	} else if (content) {
		//fallback: show the first 30 chars of the document, if title left empty
		if (content.length > MAX_TITLE_LENGTH) {
			header = content.substring(0, MAX_TITLE_LENGTH) + '...';
		} else {
			header = content;
		}
	}

	let editUrl;
	if (id) {
		editUrl = '/edit/' + id;
	}

	let timestamp;
	if (created) {
		console.log(created);
		timestamp = beautify(created);
		console.log(timestamp);
	}
</script>

<div class="col">
	<div class="card card-cover h-100 overflow-hidden text-white bg-dark rounded-5 shadow-lg">
		<div class="d-flex flex-column h-100 p-5 pb-3 text-white text-shadow-1">
			<a href={editUrl} style="text-decoration: none; color: white;"
				><h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{header}</h2></a
			>
			<!-- <h2 class="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">{header}</h2> -->
			<ul class="d-flex list-unstyled mt-auto">
				<li class="me-auto">
					<svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar" /></svg>
					<small>
						{created}
					</small>
				</li>
				<li class="d-flex align-items-center">
					<svg class="bi me-2" width="1em" height="1em"><use xlink:href="#calendar3" /></svg>
					<small />
				</li>
				<li class="d-flex align-items-center">
					<svg
						width="1.2em"
						height="1.2em"
						alt="Delete..."
						style="filter: contrast(0) brightness(2);"><use xlink:href="#trash" /></svg
					>
				</li>
			</ul>
		</div>
	</div>
</div>
