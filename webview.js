module.exports = Franz => {
	const getMessages = function getMessages() {
		let direct = 0;

		const aDirects = document.querySelectorAll('.NavV4Sidebar-team-selector .NavV4SelectorRow-unread-badge > .BadgeV2-count');
		aDirects.forEach(notificationElement => direct += parseInt(notificationElement.textContent) || 0);

		let indirect = !!document.querySelector('.NavV4Sidebar-team-selector .NavV4SelectorRow-container-unread');

		if(!direct && !indirect) {
			document.querySelectorAll('.WebAppSidebar-footer .NavV4SelectorRow-unread-badge > .BadgeV2-count, .ChatChannelList-container .ChatChannelListItem-container-unread .BadgeV2-count');
			aDirects.forEach(notificationElement => direct += parseInt(notificationElement.textContent) || 0);

			indirect = !!document.querySelector('.WebAppV2-shared-footer .NavV4Footer-menu-icon .NavV4FooterMenuIcon-icon.NavV4ItemIcon-icon-unread, .WebAppSidebar-footer .NavV4FooterGlobalContextDisplay-team-list > .NavV4SelectorRow-container-unread')?1:0;
		}

		Franz.setBadge(direct, indirect);
	};

	Franz.loop(getMessages);
};
