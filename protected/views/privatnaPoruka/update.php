<?php
/* @var $this PrivatnaPorukaController */
/* @var $model PrivatnaPoruka */

$this->breadcrumbs=array(
	'Privatna Porukas'=>array('index'),
	$model->idPrivatnaPoruka=>array('view','id'=>$model->idPrivatnaPoruka),
	'Update',
);

$this->menu=array(
	array('label'=>'List PrivatnaPoruka', 'url'=>array('index')),
	array('label'=>'Create PrivatnaPoruka', 'url'=>array('create')),
	array('label'=>'View PrivatnaPoruka', 'url'=>array('view', 'id'=>$model->idPrivatnaPoruka)),
	array('label'=>'Manage PrivatnaPoruka', 'url'=>array('admin')),
);
?>

<h1>Update PrivatnaPoruka <?php echo $model->idPrivatnaPoruka; ?></h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>