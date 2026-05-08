let dataSet = [
	["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
	["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
	["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
	["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
	["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"],
	["Brielle Williamson", "Integration Specialist", "New York", "4804", "2012/12/02", "$372,000"],
	["Herrod Chandler", "Sales Assistant", "San Francisco", "9608", "2012/08/06", "$137,500"],
	["Rhona Davidson", "Integration Specialist", "Tokyo", "6200", "2010/10/14", "$327,900"],
	["Colleen Hurst", "Javascript Developer", "San Francisco", "2360", "2009/09/15", "$205,500"],
	["Sonya Frost", "Software Engineer", "Edinburgh", "1667", "2008/12/13", "$103,600"],
	["Jena Gaines", "Office Manager", "London", "3814", "2008/12/19", "$90,560"],
	["Quinn Flynn", "Support Lead", "Edinburgh", "9497", "2013/03/03", "$342,000"],
	["Charde Marshall", "Regional Director", "San Francisco", "6741", "2008/10/16", "$470,600"],
	["Haley Kennedy", "Senior Marketing Designer", "London", "3597", "2012/12/18", "$313,500"],
	["Tatyana Fitzpatrick", "Regional Director", "London", "1965", "2010/03/17", "$385,750"],
	["Michael Silva", "Marketing Designer", "London", "1581", "2012/11/27", "$198,500"],
	["Paul Byrd", "Chief Financial Officer (CFO)", "New York", "3059", "2010/06/09", "$725,000"],
	["Gloria Little", "Systems Administrator", "New York", "1721", "2009/04/10", "$237,500"],
	["Bradley Greer", "Software Engineer", "London", "2558", "2012/10/13", "$132,000"],
	["Dai Rios", "Personnel Lead", "Edinburgh", "2290", "2012/09/26", "$217,500"],
	["Jenette Caldwell", "Development Lead", "New York", "1937", "2011/09/03", "$345,000"],
	["Yuri Berry", "Chief Marketing Officer (CMO)", "New York", "6154", "2009/06/25", "$675,000"],
	["Caesar Vance", "Pre-Sales Support", "New York", "8330", "2011/12/12", "$106,450"],
	["Doris Wilder", "Sales Assistant", "Sidney", "3023", "2010/09/20", "$85,600"],
	["Angelica Ramos", "Chief Executive Officer (CEO)", "London", "5797", "2009/10/09", "$1,200,000"],
	["Gavin Joyce", "Developer", "Edinburgh", "8822", "2010/12/22", "$92,575"],
	["Jennifer Chang", "Regional Director", "Singapore", "9239", "2010/11/14", "$357,650"],
	["Brenden Wagner", "Software Engineer", "San Francisco", "1314", "2011/06/07", "$206,850"],
	["Fiona Green", "Chief Operating Officer (COO)", "San Francisco", "2947", "2010/03/11", "$850,000"],
	["Shou Itou", "Regional Marketing", "Tokyo", "8899", "2011/08/14", "$163,000"],
	["Michelle House", "Integration Specialist", "Sidney", "2769", "2011/06/02", "$95,400"],
	["Suki Burks", "Developer", "London", "6832", "2009/10/22", "$114,500"],
	["Prescott Bartlett", "Technical Author", "London", "3606", "2011/05/07", "$145,000"],
	["Gavin Cortez", "Team Leader", "San Francisco", "2860", "2008/10/26", "$235,500"],
	["Martena Mccray", "Post-Sales support", "Edinburgh", "8240", "2011/03/09", "$324,050"],
	["Unity Butler", "Marketing Designer", "San Francisco", "5384", "2009/12/09", "$85,675"]
];

(function ($) {
	"use strict";

	var dataTableLanguage = {
		lengthMenu: "Show _MENU_ entries",
		paginate: {
			next: '<i class="fa fa-angle-double-right" aria-hidden="true"></i>',
			previous: '<i class="fa fa-angle-double-left" aria-hidden="true"></i>'
		}
	};

	function cleanLengthDropdown(settings) {
		var api = new $.fn.dataTable.Api(settings);
		var $container = $(api.table().container());
		var $length = $container.find(".dataTables_length");

		if (!$length.length) return;

		var $select = $length.find("select").first();
		if (!$select.length) return;

		if ($.fn.selectpicker) {
			try {
				$select.selectpicker("destroy");
			} catch (e) { }
		}

		$length.find(".bootstrap-select").each(function () {
			var $wrapper = $(this);
			var $innerSelect = $wrapper.find("select").first();

			if ($innerSelect.length) {
				$innerSelect.insertBefore($wrapper);
			}

			$wrapper.remove();
		});

		$length.find("button.dropdown-toggle, .dropdown-menu").remove();

		$select = $length.find("select").first();
		$length.find("select").not($select).remove();

		$select
			.removeClass("selectpicker bs-select-hidden")
			.removeAttr("data-style")
			.removeAttr("data-live-search")
			.removeAttr("tabindex")
			.css({
				display: "inline-block",
				width: "auto",
				minWidth: "64px",
				height: "32px",
				padding: "4px 28px 4px 8px",
				border: "1px solid #dee2e6",
				borderRadius: "4px",
				backgroundColor: "#fff",
				margin: "0 6px",
				opacity: "1",
				visibility: "visible",
				cursor: "pointer"
			});
	}

	function fixLengthDropdown(settings) {
		cleanLengthDropdown(settings);

		setTimeout(function () {
			cleanLengthDropdown(settings);
		}, 100);

		setTimeout(function () {
			cleanLengthDropdown(settings);
		}, 500);

		setTimeout(function () {
			cleanLengthDropdown(settings);
		}, 1000);
	}

	$(document).on("init.dt", function (e, settings) {
		fixLengthDropdown(settings);
	});

	function initDataTable(selector, options) {
		if (!$(selector).length || $.fn.DataTable.isDataTable(selector)) return null;

		var table = $(selector).DataTable($.extend(true, {
			order: [],
			language: dataTableLanguage,
			initComplete: function (settings) {
				fixLengthDropdown(settings);
			}
		}, options));

		return table;
	}

	var tableExample = initDataTable("#example", {
		createdRow: function (row) {
			$(row).addClass("selected");
		},
		scrollY: "50vh",
		autoWidth: false,
		scrollCollapse: true,
		paging: true,
		lengthChange: true
	});

	if (tableExample) {
		tableExample.on("click", "tbody tr", function () {
			$(this).toggleClass("selected");
		});

		tableExample.rows().every(function () {
			this.nodes().to$().removeClass("selected");
		});
	}

	var table2 = initDataTable("#example2", {
		createdRow: function (row) {
			$(row).addClass("selected");
		},
		scrollY: "42vh",
		scrollCollapse: true,
		paging: false
	});

	if (table2) {
		table2.on("click", "tbody tr", function () {
			$(this).toggleClass("selected");
		});

		table2.rows().every(function () {
			this.nodes().to$().removeClass("selected");
		});
	}

	initDataTable("#responsiveTable", {
		responsive: true,
		lengthChange: true
	});

	initDataTable("#dataTable1", {
		searching: false,
		paging: true,
		select: false,
		lengthChange: true
	});

	initDataTable("#dataTable2", {
		searching: false,
		paging: true,
		select: false,
		lengthChange: true
	});

	initDataTable("#dataTable3", {
		searching: false,
		paging: true,
		select: false,
		lengthChange: true
	});

	initDataTable("#dataTable4", {
		searching: false,
		paging: true,
		select: false,
		lengthChange: true
	});

	initDataTable("#example5", {
		searching: false,
		paging: true,
		select: false,
		lengthChange: true,
		scrollY: "50vh",
		autoWidth: false,
		scrollCollapse: true
	});

	initDataTable("#example10", {
		searching: false,
		paging: true,
		select: false,
		info: false,
		responsive: true,
		lengthChange: true,
		scrollY: "50vh",
		autoWidth: false,
		scrollCollapse: true
	});

	initDataTable("#example6", {
		searching: false,
		paging: true,
		select: false,
		info: false,
		lengthChange: true
	});

	initDataTable("#example7", {
		searching: false,
		paging: true,
		select: false,
		info: false,
		lengthChange: true
	});

	initDataTable("#example8", {
		searching: false,
		paging: true,
		select: false,
		info: false,
		lengthChange: true
	});

	initDataTable("#orderTable", {
		searching: false,
		paging: true,
		select: false,
		info: false,
		lengthChange: true,
		scrollY: "50vh",
		autoWidth: false,
		scrollCollapse: true
	});

	initDataTable("#example3", {
		scrollY: "50vh",
		autoWidth: false,
		scrollCollapse: true,
		lengthChange: true
	});

	initDataTable("#example4", {
		scrollY: "50vh",
		autoWidth: false,
		scrollCollapse: true,
		lengthChange: true
	});

})(jQuery);
