function openContabs(menuId, url, canclose) {
    if (typeof canclose == "undefined" || canclose == "false") {
        canclose = "false";
    } else {
        canclose = "true";
    }
    var $menuId = $("#" + menuId);
    $menuId.attr("href", url);
    $menuId.attr("canclose", canclose);

    $menuId.trigger("click");
}