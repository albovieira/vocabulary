<div modal-render="{{$isRendered}}" tabindex="-1" role="dialog" class="modal"
     uib-modal-animation-class="fade"
     modal-in-class="in"
     ng-style="{'z-index': 1050 + index*10, display: 'block'}">
    <div class="modal-dialog {{size ? 'modal-' + size : ''}}"><div class="modal-content" uib-modal-transclude></div></div>
</div>
