<?php
/* @var $this LogController */
/* @var $model Log */

$this->breadcrumbs=array(
	'Logs'=>array('index'),
	$model->idLog=>array('view','id'=>$model->idLog),
	'Update',
);

$this->menu=array(
	array('label'=>'List Log', 'url'=>array('index')),
	array('label'=>'Create Log', 'url'=>array('create')),
	array('label'=>'View Log', 'url'=>array('view', 'id'=>$model->idLog)),
	array('label'=>'Manage Log', 'url'=>array('admin')),
);
?>

<h1>Update Log <?php echo $model->idLog; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>